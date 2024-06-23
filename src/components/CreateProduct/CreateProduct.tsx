import { storeProduct } from '@/servises/products';
import { ProductStoreRequest } from '@/types/position';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const CreateProduct = () => {
    const queryClient = useQueryClient()
  const mutator = useMutation({ mutationFn: storeProduct, onSuccess:()=>{
    queryClient.invalidateQueries({queryKey: ['products']})
  } });

  const handleSubmite: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)); // Забираем данные с формы
    const dataRequest = { ...data, price: +data.price }; // преобразуем один инпут к числу

    mutator.mutate(dataRequest as ProductStoreRequest); // отправляем форму
    event.currentTarget.reset(); // очистим форму
  };

  return (
    <div>
      <form onSubmit={handleSubmite}>
        <div>
          <label htmlFor="">Название</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Изображение</label>
          <input type="text" name="imageUrl" />
        </div>
        <div>
          <label htmlFor="">Цена</label>
          <input type="number" name="price" />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default CreateProduct;
