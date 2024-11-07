
import { IProduct } from "@/types/product.type";
import { generateClient } from "./client";
import { Urls } from "./urls";


interface fetchProductGlobal {
  products: IProduct[];
}

type fetchProductListType = () => Promise<fetchProductGlobal>;

export const fetchProductList: fetchProductListType = async () => {
  const client = generateClient();
  const response = await client.get(Urls.product.list);
  
  return response.data;
};

