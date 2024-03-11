import { createCallerFactory, publicProcedure, router } from '../trpc';

import { batchRouter } from './batch';
import { userRouter } from './user';
import { utilRouter } from './util';
import { postRouter } from './post';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  batch: batchRouter,
  user: userRouter,
  util: utilRouter,
  post: postRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
