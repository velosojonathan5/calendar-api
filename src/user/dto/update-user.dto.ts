import { IsNumberString, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsNumberString()
  @Length(11, 11)
  phone: string;
}
