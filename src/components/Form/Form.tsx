import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import { useAddImage } from '../../hooks/useAddImage';

export const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addImage, isLoading } = useAddImage();
  const cache = useQueryClient();

  const onSubmit = async (data) => {
    await addImage({
      ...data,
      urls: {
        small: data.urls,
      },
      alt_description: data.alt_description,
    });

    reset();
    cache.invalidateQueries('photos list');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('urls')} placeholder="Image URL" />
      <input
        type="text"
        {...register('alt_description')}
        placeholder="Description"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Add Image'}
      </button>
    </form>
  );
};
