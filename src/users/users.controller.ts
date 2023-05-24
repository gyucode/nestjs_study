import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Redirect, Query, Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from './UserInfo';

@Controller('users')
export class UsersController {

  // constructor(private readonly usersService: UsersService) {}
  @Inject(UsersService) private readonly usersService: UsersService;


  @Post()
  async create(@Body() createUserDto: CreateUserDto) :Promise<void>{
    console.log(createUserDto)
    const {name, email, password } = createUserDto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto)
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }
  
  @Post('/login')
  async login(@Body() dto: UserLoginDto ): Promise<string>{
    console.log(dto)
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    return await this.usersService.getUserInfo(userId);
  }

  @Get()
  findAll() {

    // return this.usersService.findAll();
  }

//   // @Header('Custom', 'Test Header')
//   @Redirect('https://nestjs.com', 301)
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }


//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
}
