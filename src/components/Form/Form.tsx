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

// TODO: CLEAR рабочая форма
// import { useForm } from 'react-hook-form';
// import { useMutation } from 'react-query';

// // import { TextInput } from '../TextInput/TextInput';
// // import { CheckBox } from '../CheckBox/CheckBox';
// // import { TextArea } from '../TextArea/TextArea';
// import { IPhoto, UnsplashService } from '../../services/unsplash.service';

// interface FormData extends IPhoto {
//   newData: string;
//   createDate: string;
// }

// export const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const { mutate, isLoading } = useMutation((formData: FormData) => {
//     const photo: IPhoto = {
//       id: '',
//       created_at: '',
//       description: '',
//       alt_description: '',
//       urls: {
//         raw: '',
//         full: '',
//         regular: '',
//         small: '',
//         thumb: '',
//         small_s3: '',
//       },
//       ...formData, // добавляем данные формы в объект фотографии
//     };

//     return UnsplashService.create(photo); // отправляем POST-запрос в API
//   });

//   const onSubmit = (formData: FormData) => {
//     mutate(formData); // вызываем функцию мутации для отправки POST-запроса
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Название фотографии:
//         <input
//           type="text"
//           {...register('alt_description', { required: true })}
//         />
//         {errors.alt_description && (
//           <span>Название обязательно для заполнения</span>
//         )}
//       </label>
//       <label>
//         Ссылка на фотографию:
//         <input type="text" {...register('urls.small', { required: true })} />
//         {errors.urls?.small && <span>Ссылка обязательна для заполнения</span>}
//       </label>
//       <button type="submit" disabled={isLoading}>
//         Добавить фото
//       </button>
//     </form>
//   );
// };
