import { api } from '@/app/api';
import { Position } from '@/types';

export const getProducts = async () => {
  const { data } = await api.get<Position[]>('/positions');
  return data;
};
