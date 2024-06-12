import { NextMiddleware, NextResponse } from "next/server";
import { MiddlewareFactory } from "@/types/middlewares";

/**
 * The stackMiddlewares function is a function that takes an array of middleware functions and returns a single
 * middleware function.
 * The returned middleware function will execute each of the middleware functions in the array, in order.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2024-01-30
 *
 * @param {MiddlewareFactory<Array>} functions -  An array of middleware functions.
 * @param {Number} index - The starting index of the middleware functions to be executed.
 *
 * @returns {NextMiddleware} - A middleware function.
 */
export function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = stackMiddlewares(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
