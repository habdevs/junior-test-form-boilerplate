import { useQuery } from 'react-query';

import { IPhoto } from '../services/unsplash.service';

export const useImageCache = (): IPhoto[] => {
  const { data } = useQuery<IPhoto[]>('photos list');

  return data || [];
};
