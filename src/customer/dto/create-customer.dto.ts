import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsUrl,
  IsNumber,
  IsDate,
} from 'class-validator';

import { opt } from '../../utils/index.ts';

export class CreateCustomerDto {
  @ApiProperty(opt('Full name of the customer'))
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty(opt('Unique email address'))
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty(opt('Phone number', { required: false }))
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty(opt('First name', { required: false }))
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty(opt('Last name', { required: false }))
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty(opt('Company name', { required: false }))
  @IsString()
  @IsOptional()
  company?: string;

  @ApiProperty(opt('Job title', { required: false }))
  @IsString()
  @IsOptional()
  jobTitle?: string;

  @ApiProperty(opt('Street address', { required: false }))
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty(opt('City', { required: false }))
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty(opt('State or province', { required: false }))
  @IsString()
  @IsOptional()
  state?: string;

  @ApiProperty(opt('Postal / ZIP code', { required: false }))
  @IsString()
  @IsOptional()
  zipCode?: string;

  @ApiProperty(opt('Country', { required: false }))
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty(opt('Website URL', { required: false }))
  @IsUrl()
  @IsOptional()
  website?: string;

  @ApiProperty(opt('Free-form notes', { required: false }))
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty(opt('Whether the customer is active', { default: true, required: false }))
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty(opt('Birth date', { required: false, type: Date }))
  @IsOptional()
  birthDate?: Date;

  @ApiProperty(opt('Gender', { required: false }))
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty(opt('Avatar image URL', { required: false }))
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty(opt('LinkedIn profile URL', { required: false }))
  @IsString()
  @IsOptional()
  linkedIn?: string;

  @ApiProperty(opt('Twitter handle', { required: false }))
  @IsString()
  @IsOptional()
  twitter?: string;

  @ApiProperty(opt('Instagram handle', { required: false }))
  @IsString()
  @IsOptional()
  instagram?: string;

  @ApiProperty(opt('Preferred language', { required: false }))
  @IsString()
  @IsOptional()
  language?: string;

  @ApiProperty(opt('Timezone', { required: false }))
  @IsString()
  @IsOptional()
  timezone?: string;

  @ApiProperty(opt('Marketing opt-in', { default: false, required: false }))
  @IsBoolean()
  @IsOptional()
  marketingOptIn?: boolean;

  @ApiProperty(opt('Customer segment/type', { required: false }))
  @IsString()
  @IsOptional()
  customerType?: string;

  @ApiProperty(opt('Loyalty points balance', { default: 0, required: false }))
  @IsNumber()
  @IsOptional()
  loyaltyPoints?: number;

  @ApiProperty(opt('Last contact date', { required: false, type: Date }))
  @IsDate()
  @IsOptional()
  lastContactDate?: Date;

  @ApiProperty(opt('Preferred contact channel', { required: false }))
  @IsString()
  @IsOptional()
  preferredContactMethod?: string;

  @ApiProperty(opt('Annual revenue', { required: false }))
  @IsNumber()
  @IsOptional()
  annualRevenue?: number;

  @ApiProperty(opt('Tax identifier', { required: false }))
  @IsString()
  @IsOptional()
  taxId?: string;
}
