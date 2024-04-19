import { User } from '@prisma/client';
import { Request } from 'express';

export interface IRequestWithJwtData extends Request {
  user: User;
}
