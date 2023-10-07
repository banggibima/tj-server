import { z } from "zod";

const insertMany = z.array(
  z.object({
    first_name: z.string().min(2).nullable().optional(),
    last_name: z.string().min(2).nullable().optional(),
  })
);

const insert = z.object({
  first_name: z.string().min(2).nullable().optional(),
  last_name: z.string().min(2).nullable().optional(),
});

const edit = z.object({
  first_name: z.string().min(2).nullable().optional(),
  last_name: z.string().min(2).nullable().optional(),
});

const validator = {
  insertMany,
  insert,
  edit,
};

export default validator;
