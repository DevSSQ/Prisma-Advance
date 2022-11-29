import { Request, Response } from "express";
import {Loan, User} from '@prisma/client'
import {prisma} from '../config/db'

export const getAllLoans= async(req:Request, res:Response) =>{
    const loans = await prisma.loan.findMany();
    return res.status(200).json(loans);
}

export const addLoan = async (req:Request, res:Response) =>{
    const newLoan = req.body as Loan;
        await prisma.loan.create({
            data: newLoan,
        });
        return res.status(201).json({
            message: 'New loan added !'
        });
}

export const lendBook = async(req:Request, res:Response) =>{
    const loanInfo = req.params as Loan;
    const valid = prisma.User.findUnique({
        where: {id: loanInfo.id}
    });
       if (valid != null){
            prisma.loan.create({
                data: loanInfo
            });
            res.status(200).json({message: 'Lend the book successfully !'})
       } else {
        return res.status(400).json({message: ' invalid UserID !'})
       }
}


