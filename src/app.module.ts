import { Module } from '@nestjs/common';
import  PostsController  from './posts/post.controller';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [],
})
export class AppModule {}
