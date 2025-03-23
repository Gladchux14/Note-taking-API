import { Request, Response, NextFunction } from "express";

export function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} ${req.originalUrl}`);
  next();
}

