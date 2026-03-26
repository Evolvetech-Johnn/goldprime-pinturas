import type { Request, Response } from 'express';
import Lead from '../models/Lead.js';

export const createLead = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, city, service, message, source } = req.body;
    
    const newLead = new Lead({
      name,
      phone,
      email,
      city,
      service,
      message,
      source: source || 'website'
    });

    await newLead.save();
    res.status(201).json({ success: true, message: 'Lead capturado com sucesso!', data: newLead });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao capturar lead', error: (error as Error).message });
  }
};

export const getAllLeads = async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao buscar leads', error: (error as Error).message });
  }
};

export const updateLeadStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updatedLead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedLead) return res.status(404).json({ success: false, message: 'Lead não encontrado' });
    
    res.status(200).json({ success: true, data: updatedLead });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao atualizar status do lead', error: (error as Error).message });
  }
};
