import { CartActions } from "@/Redux/feature/cart.slice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { FaStar } from "react-icons/fa";

export interface IProductCard {
  id: number;
  title: string;
  price: number;
  shippingInformation: string;
  rating: number;
  image: string[];
  added: boolean;
  stock: number;
}

export const ProductCard: React.FC<IProductCard> = ({
  id,
  title,
  price,
  shippingInformation,
  rating,
  image,
  added,
  stock,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.list);
  const isAdded = cartItems.some((item) => item.id === id && item.added);

  const add = () => {
    if (!isAdded) {
      dispatch(
        CartActions.addCart({
        id,
          title,
          price,
          shippingInformation,
          rating,
          image,
          added: true,
          stock,
        })
      );
    }
  };

  const remove = () => {
    dispatch(CartActions.removeCart(id));
  };

  return (
    <section className="flex flex-col justify-center gap-3 rounded-xl px-10 py-8 bg-slate-300">
      <div className="flex justify-center items-center">
        <img src={image[0]} alt={title} className="size-40" />
      </div>
      <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center gap-4">
        <h2 className="font-bold capitalize text-xl text-purple-950 truncate">
          {title}
        </h2>
      </div>
      <div>
        <p className="text-gray-600 font-semibold text-ellipsis line-clamp-1">
          ${price}
        </p>
      </div>
      <div>
        <p className="text-gray-600 font-semibold text-ellipsis line-clamp-1">
          <span className="text-sm text-slate-800 mr-2">stock:</span>
          {stock}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <p className="flex justify-center items-center gap-2 py-1 rounded-xl text-purple-950 font-semibold text-sm ">
          {shippingInformation}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span>({rating})</span>
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-black" : "text-white"}
          />
        ))}
      </div>
      </div>
      {isAdded ? (
        <button
          onClick={remove}
          className="bg-red-700 text-white text-lg font-semibold w-full py-1 rounded-md"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={add}
          className="bg-blue-600 text-white text-lg font-semibold w-full py-1 rounded-md"
        >
          Add to Cart
        </button>
      )}
    </section>
  );
};
