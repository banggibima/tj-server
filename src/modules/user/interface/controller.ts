import { Request, Response } from "express";
import useCase from "../application/use-case";

async function selectMany(req: Request, res: Response) {
  const result = await useCase.selectMany();
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

async function selectUniqueById(req: Request, res: Response) {
  const { params } = req;
  const result = await useCase.selectUniqueById(params.id);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

async function insertMany(req: Request, res: Response) {
  const { body } = req;
  const result = await useCase.insertMany(body);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

async function insert(req: Request, res: Response) {
  const { body } = req;
  const result = await useCase.insert(body);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

async function edit(req: Request, res: Response) {
  const { params, body } = req;
  const result = await useCase.edit(params.id, body);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

async function removeMany(req: Request, res: Response) {
  const result = await useCase.removeMany();
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

async function remove(req: Request, res: Response) {
  const { params } = req;
  const result = await useCase.remove(params.id);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
}

const controller = {
  selectMany,
  selectUniqueById,
  insertMany,
  insert,
  edit,
  removeMany,
  remove,
};

export default controller;
