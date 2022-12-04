import { NextFunction, Request, Response } from "express";
import Admin from "../models/Admin";
import mongoose from "mongoose";

const getLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {}
};

const postLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {}
};

const postLogout = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {}
};

const postCreateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    

  const admin = new Admin({
    username: "Ali Çendek",
    password: "Ali_Çendek_18_06",
  });

  try {
    await admin.save();
    res.status(201).json({
      message: "Admin created successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Creating a Admin is failed!",
    });
  }
};

// export
export default {
  getLogin,
  postLogin,
  postLogout,
  postCreateAdmin,
};
