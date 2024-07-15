"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import CustomFormField from "../custom/CustomFormField";
import { signUpFormSchema } from "@/lib/formvalidation";

const PatientSignupForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      patientname: "",
      email: "",
      phone: "",
    },
    mode: "all",
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hey there!</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>

        <CustomFormField
          name="patientname"
          formLabel="Full Name"
          placeholder="John Doe"
          form={form}
          iconSrc={"./assets/icons/user.svg"}
          fieldType="input"
        />
        <CustomFormField
          name="email"
          formLabel="Email Address"
          placeholder="JohnDoe@gmail.com"
          form={form}
          iconSrc={"./assets/icons/email.svg"}
          fieldType="input"
        />
        <CustomFormField
          name="phone"
          formLabel="Phone Number"
          placeholder="+000 342045334"
          form={form}
          fieldType="phoneinput"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientSignupForm;
