import { ConfigModule } from './config/index.ts';
import { CustomerModule, CustomerController, CustomerService } from './customer/index.ts';

import type { Config } from './config/index.ts';

export { ConfigModule, CustomerModule, CustomerController, CustomerService };
export type { Config };