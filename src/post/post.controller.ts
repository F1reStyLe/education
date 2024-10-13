import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
    @Get()
    getPost(): Object {
        return {
            id: 1,
            title: 'Post 1',
            content: 'Post 1 content',
            author: 'John Doe',
            date: '2020-01-01',
        };
    }
}
