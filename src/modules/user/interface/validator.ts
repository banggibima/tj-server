import { z } from "zod";

const insertMany = z.array(
  z.object({
    email: z.string().min(10).nullable().optional(),
    phone: z.string().min(10).nullable().optional(),
    username: z.string().min(4),
    password: z.string().min(8).max(20),
    role_id: z.string().uuid().optional(),
    profile_id: z.string().uuid().optional(),
  })
);

const insert = z.object({
  email: z.string().min(10).nullable().optional(),
  phone: z.string().min(10).nullable().optional(),
  username: z.string().min(4),
  password: z.string().min(8).max(20),
  role_id: z.string().uuid().optional(),
  profile_id: z.string().uuid().optional(),
});

const edit = z.object({
  email: z.string().min(10).nullable().optional(),
  phone: z.string().min(10).nullable().optional(),
  username: z.string().min(4),
  password: z.string().min(8).max(20),
  role_id: z.string().uuid().optional(),
  profile_id: z.string().uuid().optional(),
});

const validator = {
  insertMany,
  insert,
  edit,
};

export default validator;
