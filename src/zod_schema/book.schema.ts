import {z} from 'zod';

export const bookSchema = z.object({
    body: z.object({
       id: z.string({required_error: 'id is required !' }),
       name: z.string({required_error: 'name is required !'}),
       genre: z.string({required_error: 'genre is required !'}) 
    })
});