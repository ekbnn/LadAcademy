import { api } from '@/app/api';
import { ProductResponse } from '@/types';
import { ProductStoreRequest } from '@/types/position';

export const getProducts = async (page: number, perPage: number = 3) => {
  const { data } = await api.get<ProductResponse>('/positions', {
    params: {
      _page: page,
      _per_page: perPage,
    },
    transformResponse: (data) => {
      const parseData = JSON.parse(data);

      const newData = {
        ...parseData,
        products: parseData.data,
      };
      delete newData.data;
      console.log(newData);

      return newData;
    },
  });

  return data;
};

export const storeProduct = async (product: ProductStoreRequest) => {
  await api.post('/positions', product);
};
