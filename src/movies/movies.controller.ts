import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('/movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOnyById(@Param('id') movieId: string) {
    return `This will return ${movieId} movie`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a ${movieId} movie`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string) {
    return `This will update a ${movieId} movie`;
  }
}
