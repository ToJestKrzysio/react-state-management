import {z} from "zod";

export const userDataValidator = z.object({
    firstName: z.string().nonempty(),
    age: z.coerce.number().gt(0),
})
export type UserData = z.infer<typeof userDataValidator>
