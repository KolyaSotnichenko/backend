import { IsArray, IsEmail, IsString } from "class-validator";

export class UpdateUserDto {
  // @IsEmail()
  email?: string;

  password?: string;

  isAdmin?: boolean;

  address?: string;

  organization?: string;

  currency?: string;
}
