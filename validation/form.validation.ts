import { z } from "zod";

export const FormSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters."),
  Email: z.string().email("Invalid email address."),
  Address: z.string().min(3, "Address must be at least 3 characters."),
  MobilePhone: z
    .string()
    .regex(
      /^09\d{9}$/,
      "Mobile number must start with 09 and be exactly 11 digits."
    ),
  Phone: z
    .string()
    .regex(
      /^0\d{2,3}\d{7,8}$/,
      "Phone number must start with a valid area code and be 8 to 10 digits."
    ),
});
