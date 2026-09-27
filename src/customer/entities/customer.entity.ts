import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { opt } from '../../utils/index.ts';

@Entity()
export class Customer {
  @ApiProperty(opt('Unique customer identifier'))
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty(opt('Full name of the customer'))
  @Column()
  name: string;

  @ApiProperty(opt('Unique email address'))
  @Column({ unique: true })
  email: string;

  @ApiProperty(opt('Phone number', { required: false }))
  @Column({ nullable: true })
  phone?: string;

  @ApiProperty(opt('First name', { required: false }))
  @Column({ nullable: true })
  firstName?: string;

  @ApiProperty(opt('Last name', { required: false }))
  @Column({ nullable: true })
  lastName?: string;

  @ApiProperty(opt('Company name', { required: false }))
  @Column({ nullable: true })
  company?: string;

  @ApiProperty(opt('Job title', { required: false }))
  @Column({ nullable: true })
  jobTitle?: string;

  @ApiProperty(opt('Street address', { required: false }))
  @Column({ nullable: true })
  address?: string;

  @ApiProperty(opt('City', { required: false }))
  @Column({ nullable: true })
  city?: string;

  @ApiProperty(opt('State or province', { required: false }))
  @Column({ nullable: true })
  state?: string;

  @ApiProperty(opt('Postal / ZIP code', { required: false }))
  @Column({ nullable: true })
  zipCode?: string;

  @ApiProperty(opt('Country', { required: false }))
  @Column({ nullable: true })
  country?: string;

  @ApiProperty(opt('Website URL', { required: false }))
  @Column({ nullable: true })
  website?: string;

  @ApiProperty(opt('Free-form notes', { required: false }))
  @Column({ type: 'text', nullable: true })
  notes?: string;

  @ApiProperty(opt('Whether the customer is active', { default: true }))
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty(opt('Birth date', { required: false, type: Date }))
  @Column({ type: 'date', nullable: true })
  birthDate?: Date;

  @ApiProperty(opt('Gender', { required: false }))
  @Column({ nullable: true })
  gender?: string;

  @ApiProperty(opt('Avatar image URL', { required: false }))
  @Column({ nullable: true })
  avatar?: string;

  @ApiProperty(opt('LinkedIn profile URL', { required: false }))
  @Column({ nullable: true })
  linkedIn?: string;

  @ApiProperty(opt('Twitter handle', { required: false }))
  @Column({ nullable: true })
  twitter?: string;

  @ApiProperty(opt('Instagram handle', { required: false }))
  @Column({ nullable: true })
  instagram?: string;

  @ApiProperty(opt('Preferred language', { required: false }))
  @Column({ nullable: true })
  language?: string;

  @ApiProperty(opt('Timezone', { required: false }))
  @Column({ nullable: true })
  timezone?: string;

  @ApiProperty(opt('Marketing opt-in', { default: false }))
  @Column({ default: false })
  marketingOptIn: boolean;

  @ApiProperty(opt('Customer segment/type', { required: false }))
  @Column({ nullable: true })
  customerType?: string;

  @ApiProperty(opt('Loyalty points balance', { default: 0 }))
  @Column({ default: 0 })
  loyaltyPoints: number;

  @ApiProperty(opt('Last contact date', { required: false, type: Date }))
  @Column({ type: 'date', nullable: true })
  lastContactDate?: Date;

  @ApiProperty(opt('Preferred contact channel', { required: false }))
  @Column({ nullable: true })
  preferredContactMethod?: string;

  @ApiProperty(opt('Annual revenue', { required: false }))
  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  annualRevenue?: number;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
