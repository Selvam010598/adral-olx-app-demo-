import { z } from 'zod';

export const categories = [
  'MOBILES',
  'CARS',
  'BIKES',
  'ELECTRONICS',
  'FURNITURE',
  'PROPERTY',
  'JOBS',
  'FASHION',
  'PETS',
  'SERVICES',
] as const;

export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, string> = {
  MOBILES: 'Mobiles',
  CARS: 'Cars',
  BIKES: 'Bikes',
  ELECTRONICS: 'Electronics & Appliances',
  FURNITURE: 'Furniture',
  PROPERTY: 'Property',
  JOBS: 'Jobs',
  FASHION: 'Fashion',
  PETS: 'Pets',
  SERVICES: 'Services',
};
