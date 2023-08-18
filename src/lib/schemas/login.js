import { z } from 'zod';

export const loginUserSchema = z.object({
    email: z.string({ required_error: 'Email o nombre de usuario requeridos' }),
    password: z.string({ required_error: 'Contraseña requerida' })
});
