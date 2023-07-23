import { Controller, Query, Get } from '@nestjs/common';

@Controller('search')
export class SearchController {

    @Get()
    search(@Query('title') title: string) {

    }
}
