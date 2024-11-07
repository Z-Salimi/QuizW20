
import { Controller, useForm } from "react-hook-form";
import { Input } from "./input";
import React, { useState } from "react";
import { Modal } from "./modal";
import { FormSchema } from "@/validation/form.validation";

import { zodResolver } from "@hookform/resolvers/zod";

interface IForm {
  fullName: string;
  Address: string;
  MobilePhone: string;
  Phone: string;
  Email: string;
}
interface IFormProps {
  editValues?: IForm;
}

export const Form: React.FC<IFormProps> = ({ editValues }) => {
  const formField = useForm<IForm>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });
  const submit = (data: IForm) => console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<IForm | null>(null);

  const onSubmit = (values: IForm) => {
    setFormData(values);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  React.useEffect(() => {
    if (!editValues) return;
    formField.reset(editValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editValues]);

  return (
    <section className="flex flex-col px-20 py-20 w-full">
      <div className=" flex flex-col gap-10">
        <h2 className="font-bold text-3xl">User Profile</h2>
      </div>
      <div className="w-full ">
        <form
          onSubmit={formField.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-y-10 mt-20"
        >
          <Controller
            control={formField.control}
            name="fullName"
            render={({ field, fieldState }) => (
              <Input
                type="text"
                label="FullName:"
                placeholder="FullName..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={formField.control}
            name="Phone"
            render={({ field, fieldState }) => (
              <Input
                type="number"
                label="Phone:"
                placeholder="Phone..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={formField.control}
            name="MobilePhone"
            render={({ field, fieldState }) => (
              <Input
                type="number"
                label="MobilePhone:"
                placeholder="MobilePhone..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={formField.control}
            name="Email"
            render={({ field, fieldState }) => (
              <Input
                type="text"
                label="Email:"
                placeholder="Email..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={formField.control}
            name="Address"
            render={({ field, fieldState }) => (
              <Input
                type="text"
                label="Address:"
                placeholder="Address..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <button
            className="bg-green-700 hover:bg-green-800 max-w-[50vw] w-full mt-10 text-white font-semibold py-2 px-40 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {isModalOpen && <Modal formData={formData} closeModal={closeModal} />}
    </section>
  );
};
