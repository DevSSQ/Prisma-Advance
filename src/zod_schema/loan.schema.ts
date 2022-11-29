import {z} from 'zod';

export const loanSchema = z.object({
    body: z.object({
       userid: z.string({required_error: 'UserID is required'}),
       bookid: z.string({required_error: 'BookID is required'}) 
    })
});

export const loanParamsSchema = z.object({
    params: z.object({
       user_id: z.string({required_error: 'UserID is required'}),
    })
});

export type loanParamsSchemaType = z.infer<typeof loanParamsSchema>['params'];