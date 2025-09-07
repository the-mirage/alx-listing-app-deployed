import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const propertyId = parseInt(id as string);
  const property = PROPERTYLISTINGSAMPLE.find(p => p.id === propertyId);

  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }

  return res.status(200).json(property);
} 