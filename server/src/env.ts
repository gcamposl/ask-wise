import { z } from "zod";

const envSchem = z.object({
  PORT: z.coerce.number().default(3333),
});

export const env = envSchem.parse(process.env);
