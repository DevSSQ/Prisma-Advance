import { z } from 'zod';

export const addUserSchema = z.object({
  body: z.object({
    id: z.string({required_error: 'id is required !' }),
    username: z.string({ required_error: 'Username is required !' }).min(3),
    password: z.string({ required_error: 'password is required !' }).min(3)
  }),
});