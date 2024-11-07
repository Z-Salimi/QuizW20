import { CartActions } from "@/Redux/feature/cart.slice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import Link from "next/link";
import React from "react";

interface ModalProps {
  formData: any;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ formData, closeModal }) => {
  let num = 0;
  const CartList = useAppSelector((state) => state.cart.list);
  CartList.map((item) => (num += item.price));
  const dispatch = useAppDispatch();

const final=()=>{
    dispatch(CartActions.clearCart())
}

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-200 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">
                    User's Final Bill
                  </h3>
                  <div className="mt-4">
                    <p>Full Name: {formData?.fullName}</p>
                    <p>Address: {formData?.Address}</p>
                    <p>Mobile Phone: {formData?.MobilePhone}</p>
                    <p>Phone: {formData?.Phone}</p>
                    <p>Email: {formData?.Email}</p>
                  </div>
                  <div className="mt-4">
                    <h2 className="font-semibold mb-3 capitalize text-gray-500 flex items-center justify-center gap-2">
                      <span className="text-gray-700 text-xl">
                        *Total-Number:
                      </span>
                      {CartList.length}
                    </h2>
                    <p>----------------------------------------------------</p>
                    {CartList.map((item) => (
                      <div className="my-3">
                        <div className="flex items-center gap-4">
                          <h2 className="font-semibold capitalize text-gray-500 flex flex-col">
                            <span className="text-gray-700 ">
                              -NameProduct:
                            </span>{" "}
                            {item.title}
                          </h2>
                        </div>
                        <div>
                          <p className="text-gray-600 font-semibold text-ellipsis line-clamp-1">
                            <span className="text-gray-700 ">Price:</span> $
                            {item.price}
                          </p>
                        </div>
                        <p>
                          ----------------------------------------------------
                        </p>
                       
                      </div>
                    ))}
                     <p className="text-gray-800 font-bold">
                          Total-Price: {num}
                        </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Link href={"/products"}>
                <button
                onClick={final}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  OK
                </button>
              </Link>
              <button
                type="button"
                onClick={closeModal}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
