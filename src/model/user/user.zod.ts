import z from "zod";
import {ZodRequired, zodT} from "../../utils/zod";

export const RegistrationSchema = z.object({
    email: ZodRequired.string().email({message: zodT('email')}),
    password: ZodRequired.string().min(6, zodT('min', {number: 6})),
    password_again: ZodRequired.string().min(1, zodT('min', {number: 6})),
    name: ZodRequired.string(),
    agree: ZodRequired.string().refine((val) => val)
}).refine((data) => data.password === data.password_again, {
    message: zodT('passwords_not_match'),
    path: ['password_again'],
});

export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;

export const AuthorizationSchema = z.object({
    email: ZodRequired.string().email(),
    password: ZodRequired.string(),
});

export type AuthorizationSchemaType = z.infer<typeof AuthorizationSchema>;