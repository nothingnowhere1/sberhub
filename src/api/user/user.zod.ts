import z from "zod";
import {ZodRequired, zodT} from "../../utils/zod";

export const RegistrationSchema = z.object({
    email: ZodRequired.string().email(),
    password: ZodRequired.string().min(6, zodT('required')),
    password_again: ZodRequired.string().min(1),
    name: ZodRequired.string(),
    agree: ZodRequired.string().refine((val) => val)
}).refine((data) => data.password === data.password_again, {
    message: zodT('passwords_not_match'),
    path: ['password_again'],
});

export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;