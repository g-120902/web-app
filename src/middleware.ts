"use client";
import { stackMiddlewares } from './middlewares/stackMiddlewares';
// import { authMiddleware } from './middlewares/authMiddleware';
import { langMiddleware } from './middlewares/langMiddleware';

const middlewares = [langMiddleware];
export default stackMiddlewares(middlewares);
