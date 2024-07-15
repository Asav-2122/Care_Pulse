import { z } from "zod";

export const signUpFormSchema = z.object({
  patientname: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+[1-9]{1}[0-9]{3,11}$/.test(phone),
      "Invalid phone number"
    ),
});
