import { z } from "zod";

const insertMany = z.array(
  z.object({
    name: z.string().min(10).nullable().optional(),
    role_id: z.string().uuid().optional(),
  })
);

const insert = z.object({
  name: z.string().min(10).nullable().optional(),
  role_id: z.string().uuid().optional(),
});

const edit = z.object({
  name: z.string().min(10).nullable().optional(),
  role_id: z.string().uuid().optional(),
});

const validator = {
  insertMany,
  insert,
  edit,
};

export default validator;
