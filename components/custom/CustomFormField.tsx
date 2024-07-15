import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CustomFormFieldProps {
  formLabel: string;
  placeholder?: string;
  name: string;
  form: any;
  iconSrc?: string;
  fieldType: any;
}

const RenderInput = ({
  fieldType,
  iconSrc,
  placeholder,
  field,
}: {
  fieldType: any;
  iconSrc?: string;
  placeholder?: string;
  field: any;
}) => {
  if (fieldType === "input") {
    return (
      <div className="flex rounded-md border border-dark-500 bg-dark-400">
        {iconSrc && (
          <Image
            src={iconSrc}
            height={24}
            width={24}
            alt={"icon"}
            className="ml-2"
          />
        )}
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className="shad-input border-0"
          />
        </FormControl>
      </div>
    );
  }
  if (fieldType === "phoneinput") {
    return (
      <FormControl>
        <PhoneInput
          placeholder={placeholder}
          defaultCountry="IN"
          value={field.value}
          international
          withCountryCallingCode
          className="input-phone"
          onChange={field.onChange}
        />
      </FormControl>
    );
  }
  // if (fieldType==="textarea") {
  //   return (
  //     <FormControl>
  //       <Textarea
  //         placeholder={props.placeholder}
  //         {...field}
  //         className="shad-textArea"
  //         disabled={props.disabled}
  //       />
  //     </FormControl>
  //   );
  // }
  // if (fieldType==="checkbox") {
  //   return (
  //     <FormControl>
  //       <div className="flex items-center gap-4">
  //         <Checkbox
  //           id={props.name}
  //           checked={field.value}
  //           onCheckedChange={field.onChange}
  //         />
  //         <label htmlFor={props.name} className="checkbox-label">
  //           {props.label}
  //         </label>
  //       </div>
  //     </FormControl>
  //   );
  // }
};

const CustomFormField = ({
  formLabel,
  placeholder,
  name,
  form,
  iconSrc,
  fieldType,
}: CustomFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <RenderInput
            fieldType={fieldType}
            iconSrc={iconSrc}
            placeholder={placeholder}
            field={field}
          />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
