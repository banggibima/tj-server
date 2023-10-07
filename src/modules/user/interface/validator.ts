import { z } from "zod";

const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/ as RegExp,
  phone: /^\d+$/ as RegExp,
  username: /^[a-zA-Z0-9._%+-]+$/ as RegExp,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*()_])[A-Za-z\d@#$%^&+=!*()_]+$/ as RegExp,
};

const insertMany = z.array(
  z.object({
    email: z.string().regex(regex.email).nullable().optional(),
    phone: z.string().regex(regex.phone).nullable().optional(),
    username: z.string().min(4).regex(regex.username),
    password: z.string().min(8).regex(regex.password),
    role_id: z.string().uuid().optional(),
    profile_id: z.string().uuid().optional(),
  })
);

const insert = z.object({
  email: z.string().regex(regex.email).nullable().optional(),
  phone: z.string().regex(regex.phone).nullable().optional(),
  username: z.string().min(4).regex(regex.username),
  password: z.string().min(8).regex(regex.password),
  role_id: z.string().uuid().optional(),
  profile_id: z.string().uuid().optional(),
});

const edit = z.object({
  email: z.string().regex(regex.email).nullable().optional(),
  phone: z.string().regex(regex.phone).nullable().optional(),
  username: z.string().min(4).regex(regex.username),
  password: z.string().min(8).regex(regex.password),
  role_id: z.string().uuid().optional(),
  profile_id: z.string().uuid().optional(),
});

const validator = {
  insertMany,
  insert,
  edit,
};

export default validator;
