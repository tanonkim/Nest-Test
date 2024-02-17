import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('/movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `Search movie with year: ${searchingYear}`;
  }

  @Get('/:id')
  getOnyById(@Param('id') movieId: string) {
    return `This will return ${movieId} movie`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a ${movieId} movie`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updated) {
    return {
      updated: movieId,
      ...updated,
    };
  }
}
