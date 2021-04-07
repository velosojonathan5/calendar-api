import { IsEmail, IsNumberString, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail(undefined, { message: 'O email deve ter o formato correto' })
  email: string;

  @IsNumberString()
  @Length(11, 11)
  phone: string;
}
