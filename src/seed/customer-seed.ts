import { Repository } from 'typeorm';

import { Customer } from '../customer/index.ts';

interface SeedCustomer {
  name: string;
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  website?: string;
  notes?: string;
  isActive: boolean;
  birthDate?: Date;
}

const firstNames = [
  'James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda',
  'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Lisa', 'Daniel', 'Nancy',
  'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
  'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
  'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill',
];

const companies = [
  'Acme Corp', 'Globex Industries', 'Initech', 'Umbrella Corp', 'Stark Industries',
  'Wayne Enterprises', 'Cyberdyne Systems', 'Wonka Industries', 'Soylent Corp',
  'Tyrell Corporation', 'Massive Dynamic', 'Aperture Science', 'Black Mesa',
  'Vault-Tec', 'Abstergo Industries', 'Weyland-Yutani', 'Oscorp', 'Nakatomi Corp',
];

const jobTitles = [
  'CEO', 'CTO', 'CFO', 'Engineer', 'Designer', 'Manager', 'Analyst', 'Developer',
  'Director', 'Consultant', 'Architect', 'Product Manager', 'Data Scientist',
  'Marketing Lead', 'Sales Representative', 'Customer Support', 'Project Manager',
];

const cities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
  'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
  'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington',
];

const states = [
  'NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'FL', 'OH', 'NC', 'WA', 'CO', 'DC',
];

const countries = ['USA', 'UK', 'Canada', 'Germany', 'France', 'Australia', 'Japan'];

const sampleNotes = [
  'Premium customer — prioritize support.',
  'Long-term client, renewed contract twice.',
  'New sign-up, needs onboarding.',
  'Requested a custom integration.',
  'Billing inquiry pending.',
  'VIP — schedule quarterly review.',
  'Recently upgraded to enterprise plan.',
  'Referral from existing customer.',
  'Requested data export.',
  'Account flagged for review.',
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBirthDate(): Date {
  const year = 1950 + Math.floor(Math.random() * 50);
  const month = Math.floor(Math.random() * 12);
  const day = 1 + Math.floor(Math.random() * 28);
  return new Date(year, month, day);
}

function generateSeedCustomers(): SeedCustomer[] {
  const customers: SeedCustomer[] = [];
  const usedEmails = new Set<string>();

  for (let i = 0; i < 30; i++) {
    const firstName = pick(firstNames);
    const lastName = pick(lastNames);
    const name = `${firstName} ${lastName}`;
    let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    let suffix = 1;
    while (usedEmails.has(email)) {
      email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${suffix}@example.com`;
      suffix++;
    }
    usedEmails.add(email);

    customers.push({
      name,
      email,
      phone: `+1-${pick(['212', '312', '415', '713', '512', '646', '917'])}-${String(
        Math.floor(Math.random() * 900) + 100,
      )}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      firstName,
      lastName,
      company: pick(companies),
      jobTitle: pick(jobTitles),
      address: `${Math.floor(Math.random() * 9999)} ${pick(['Main St', 'Oak Ave', 'Pine Rd', 'Elm St', 'Maple Dr', 'Cedar Ln'])}`,
      city: pick(cities),
      state: pick(states),
      zipCode: String(Math.floor(Math.random() * 90000) + 10000),
      country: pick(countries),
      website: `https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}.com`,
      notes: pick(sampleNotes),
      isActive: Math.random() > 0.2,
      birthDate: randomBirthDate(),
    });
  }

  return customers;
}

export async function seedCustomers(
  customerRepository: Repository<Customer>,
): Promise<void> {
  const existingCount = await customerRepository.count();
  if (existingCount > 0) {
    console.log(`[Seed] Customer table already has ${existingCount} rows — skipping.`);
    return;
  }

  const seedData = generateSeedCustomers();
  for (const data of seedData) {
    const customer = customerRepository.create(data);
    await customerRepository.save(customer);
  }

  console.log(`[Seed] Inserted ${seedData.length} customers.`);
}