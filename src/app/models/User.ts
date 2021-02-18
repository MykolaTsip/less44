import {Company} from './Company';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
}
