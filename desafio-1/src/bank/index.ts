import { User } from '../mock';

export function teste1(users: User[], user_id: string): number {}

export function teste2(users: User[], info: ITest2): Test2Respose {}

type ITest2 = {
  password?: string;
  amount?: number;
  user_id: string;
};

type Test2Respose = {
  success: boolean;
  message?: string;
};
