import { IsNotEmpty, IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class FaqDto {
  @IsString()
  question: string;

  @IsString()
  answer: string;
}

class ProductDto {
  @IsString() // Changed from IsNumber to IsString for flexibility
  id: number | string;
}

export class CreateTrainerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FaqDto)
  faq?: FaqDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products?: ProductDto[];
}