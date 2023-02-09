import {Controller, Get} from "@nestjs/common"


@Controller("posts")
export default class PostController {
  constructor () {
    //
  }

  @Get()
  getAllPosts() {
    return {test: "test"}
  }
}