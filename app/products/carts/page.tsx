'use client';
import { ProductCard } from "@/components/productCard";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";


export const CartPage: React.FC = () => {
  const CartList = useAppSelector((state) => state.cart.list);
  console.log(CartList.length);

  return (
    <section className="bg-slate-50 min-h-screen h-full">
      <div className="w-full h-[10vh] bg-gray-700 text-white flex justify-center items-center">
        <p className="text-2xl font-bold">Cart Page</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-10 px-8 py-4">
        {CartList && CartList.length > 0 ? (
          CartList.filter((el) => el.added).map((el) => (
            <ProductCard key={el.id} {...el} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 py-10">
            <h1 className=" flex justify-center items-center bg-red-500 text-white text-3xl font-semibold px-6 py-6 rounded-md">
              Nothing
            </h1>
          </div>
        )}
      </div>
      {CartList && CartList.length > 0 ? (
        <div className="pt-10 pb-4 px-4 w-full  flex flex-col items-center">
          <Link href={"/products/payment"}>
            <button className="px-80 py-3 bg-green-700 text-xl text-white font-semibold rounded-lg hover:bg-green-800">
              Submit
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default CartPage;