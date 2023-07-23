import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import bcrypt from "bcrypt";

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);

  }

  findAll() {
    return `This action returns all user`;
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOneBy({
      email
    })
    if (user) {
      const hash = await bcrypt.hash(user.password, 10);

      const isPasswordMatching = await bcrypt.compare(password, hash);
      console.log(hash, isPasswordMatching)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email
    })
    return user;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
