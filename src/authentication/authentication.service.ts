import { ConflictException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';



@Injectable()
export class AuthenticationService {

    constructor(private readonly userService: UserService,) { }

    async login(email: string, password: string) {
        const user = await this.userService.findOneByEmail(email)
        if (user) {
            const hash = await bcrypt.hash(user.password, 10);

            const isPasswordMatching = await bcrypt.compare(password, hash);
            console.log(hash, isPasswordMatching)
        }
    }

    async registerUser(name: string, email: string, password: string): Promise<User> {
        const existingUser = await this.userService.findOneByEmail(email);
        if (existingUser) {
            throw new ConflictException('User with the same username or email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.userService.create({ name, email, password:hashedPassword });
    }
}


