import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  company?: string;

  @Column({ nullable: true })
  jobTitle?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  zipCode?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  website?: string;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'date', nullable: true })
  birthDate?: Date;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  linkedIn?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  instagram?: string;

  @Column({ nullable: true })
  language?: string;

  @Column({ nullable: true })
  timezone?: string;

  @Column({ default: false })
  marketingOptIn: boolean;

  @Column({ nullable: true })
  customerType?: string;

  @Column({ default: 0 })
  loyaltyPoints: number;

  @Column({ type: 'date', nullable: true })
  lastContactDate?: Date;

  @Column({ nullable: true })
  preferredContactMethod?: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  annualRevenue?: number;

  @Column({ nullable: true })
  taxId?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
