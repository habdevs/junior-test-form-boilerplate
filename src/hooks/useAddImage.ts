import { v4 as uuid } from 'uuid';
import { useMutation, useQueryClient } from 'react-query';

import { IPhoto } from '../services/unsplash.service';

export const useAddImage = () => {
  const cache = useQueryClient();

  const addImage = async (data: IPhoto) => {
    const newImage: IPhoto = {
      ...data,
      id: uuid(),
      status: 'inactive',
    };

    cache.setQueryData<IPhoto[]>('photos list', (prevData = []) => [
      ...prevData,
      newImage,
    ]);
  };

  const { mutate, isLoading } = useMutation(addImage);

  return {
    addImage: mutate,
    isLoading,
  };
};
