import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';
import User from '../models/User.js';

export const protect = async (req: any, res: Response, next: NextFunction) => {
  let token;

  if (req.cookies.token) {
    try {
      token = req.cookies.token;

      // Verify token
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Grant access to specific roles
export const authorize = (...roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `User role ${req.user.role} is not authorized to access this route`,
      });
    }
    next();
  };
};
