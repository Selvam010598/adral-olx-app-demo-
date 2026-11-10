import { z } from 'zod';
import { categories } from '../constants/categories';
import { AdCondition } from '../enums';

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const createAdSchema = z.object({
  title: z.string().min(3).max(150),
  description: z.string().min(10).max(5000),
  price: z.number().nonnegative(),
  category: z.enum(categories),
  condition: z.nativeEnum(AdCondition).optional(),
  location: z.object({
    city: z.string().min(2).max(100),
    locality: z.string().min(2).max(200).optional(),
    latitude: z.number().min(-90).max(90).optional(),
    longitude: z.number().min(-180).max(180).optional(),
  }),
  images: z.array(z.string().url()).max(10).optional(),
});

export const updateAdSchema = createAdSchema.partial();

export type CreateAdInput = z.infer<typeof createAdSchema>;
export type UpdateAdInput = z.infer<typeof updateAdSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
