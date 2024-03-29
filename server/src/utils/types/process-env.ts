/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { z } from 'zod';

const envVariables = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.union([z.literal('development'), z.literal('production')]),
  PORT: z.string().optional(),
});

const env = envVariables.safeParse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
