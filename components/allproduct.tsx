'use client';

import React, { useState, useEffect, memo } from "react";
import { ProductCard } from "./productCard";
import { fetchProductList } from "../api/product.api";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { ProductActions } from "@/Redux/feature/product.slice";
import { useQuery } from "react-query";

const perPage = 6; 

export const AllProduct: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const CartList = useAppSelector((state) => state.product.filterList);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading} = useQuery({
    queryKey: ["fetching-product"],
    queryFn: fetchProductList,
  });

  useEffect(() => {
    if (data) {
      dispatch(ProductActions.setProducts(data.products));
    }
  }, [data, dispatch]);

  if (isLoading) return <p className="w-[100%] rounded-lg bg-yellow-400 py-4 mr-4 text-center text-xl">Loading...</p>;

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = CartList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(CartList.length / perPage);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 px-8 py-4">
        {currentItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            shippingInformation={item.shippingInformation}
            rating={item.rating}
            image={item.image}
            added={false}
            stock={item.stock}
          />
        ))}
      </section>
      <div className="flex justify-center items-center mt-4">
        <button
          className="size-6 mx-2 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
        -
        </button>
        <span className="px-4 py-2">{currentPage}/{totalPages}</span>
        <button
          className="size-6 mx-2 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          +
        </button>
      </div>
    </div>
  );
});
