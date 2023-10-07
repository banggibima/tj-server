import { z } from "zod";

const insertMany = z.array(
  z.object({
    name: z.string().min(4).nullable().optional(),
  })
);

const insert = z.object({
  name: z.string().min(4).nullable().optional(),
});

const edit = z.object({
  name: z.string().min(4).nullable().optional(),
});

const validator = {
  insertMany,
  insert,
  edit,
};

export default validator;
