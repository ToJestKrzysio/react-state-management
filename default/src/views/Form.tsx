import {FieldError, useForm, UseFormRegisterReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod"
import {ForwardedRef, forwardRef, HTMLInputTypeAttribute, useId} from "react";

const formData = z.object({
    firstName: z.string().nonempty(),
    age: z.coerce.number().gt(0),
})
type FormData = z.infer<typeof formData>

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>({
        resolver: zodResolver(formData)
    })

    const onSubmit = (data: FormData) => console.log(data)

    return (
        <div className="flex h-full w-full items-center justify-center text-white">
            <form className="flex flex-col gap-y-2 w-[500px]" onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" error={errors.firstName} {...register("firstName")}/>
                <Input type="number" label="Age" error={errors.age} {...register("age")}/>

                <button
                    type="submit"
                    className="self-center w-1/2 text-center rounded bg-green-800 px-5 py-2 text-2xl transition ease-in-out
                           hover:bg-green-700 hover:text-gray-300"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


interface InputProps<T extends string> extends UseFormRegisterReturn<T> {
    label: string;
    type?: HTMLInputTypeAttribute
    error: FieldError | undefined
}

const Input = forwardRef(function <T extends string>(
    {label, error, type, ...others}: InputProps<T>,
    ref: ForwardedRef<HTMLFieldSetElement>
) {
    const id = useId()
    const borderColor: string = error ? "border-red-500 text-red-500" : "border-gray-600 focus-within:border-blue-800 focus-within:text-blue-800"

    return (
        <>
            <fieldset
                ref={ref}
                className={"mb-2 flex items-center rounded border px-5 py-2 transition ease-in-out appearance-none " + borderColor}
            >
                <legend className="select-none px-2">
                    <label htmlFor={id} className="text-sm">{label}</label>
                </legend>
                <input {...others} id={id} type={type}
                       className="bg-transparent pb-2 outline-none text-white"
                />
            </fieldset>
            <span className="flex h-5 items-center text-red-500">{error && error.message}</span>
        </>

    )
})
