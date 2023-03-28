import { useMutation, useQueryClient } from 'react-query';

export const useDeleteCard = () => {
  const queryClient = useQueryClient();

  const deleteCard = async (id: string) => {
    // Получаем текущий список карточек из кеша
    const cards =
      queryClient.getQueryData<{ id: string }[]>('photos list') || [];

    // Удаляем карточку с указанным id из списка
    const newCards = cards.filter((card) => card.id !== id);

    // Сохраняем новый список карточек в кеш
    queryClient.setQueryData('photos list', newCards);

    // Возвращаем удаленный id для обработки в onSuccess
    return id;
  };

  return useMutation(deleteCard, {
    onSuccess: (id: string) => {
      // В случае успешного удаления, вызываем invalidateQueries для
      // обновления данных в других компонентах, которые могут использовать
      // список карточек
      queryClient.invalidateQueries('cards');
    },
  });
};
