import type { Request, Response } from 'express';
import QuoteRequest from '../models/QuoteRequest.js';

export const createQuoteRequest = async (req: Request, res: Response) => {
  try {
    const { name, phone, service, propertyType, size, urgency, images, address } = req.body;
    
    const newQuote = new QuoteRequest({
      name,
      phone,
      service,
      propertyType,
      size,
      urgency,
      images,
      address
    });

    await newQuote.save();
    res.status(201).json({ success: true, message: 'Solicitação de orçamento enviada!', data: newQuote });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao enviar solicitação', error: (error as Error).message });
  }
};

export const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: quotes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao buscar orçamentos', error: (error as Error).message });
  }
};
