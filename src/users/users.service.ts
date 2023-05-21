import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    if ( +id  < 1 ){
      throw new BadRequestException('id는 0보다 큰값이여야 한다.')
    }
    return `This action returns a #${id} user`;
  }


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
