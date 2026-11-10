import type { Category } from './constants/categories';
import type { AdStatus, AdCondition } from './enums';

export interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  condition?: AdCondition;
  status: AdStatus;
  images: string[];
  location: {
    city: string;
    locality?: string;
    latitude?: number;
    longitude?: number;
  };
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
