"use client"
import { AllProduct } from "@/components/allproduct";
import { Filter } from "@/components/filter";
import { Navbar } from "@/components/Navbar";


export const ProductsPage: React.FC =() => {
  
  return (
    <div>
    <div className="w-full fixed top-0">
      <Navbar />
    </div>
    <div className="flex pl-80">
      <Filter />
      <AllProduct/>
    </div>
    </div>
  );
};
export default ProductsPage;