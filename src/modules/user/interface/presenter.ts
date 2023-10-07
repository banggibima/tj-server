import { Prisma } from "@prisma/client";
import User from "../domain/entity";

interface Presenter {
  success: boolean;
  failure: unknown;
  content: User | User[] | Prisma.BatchPayload;
  message: string;
}

function success(content: Presenter["content"], message: Presenter["message"]) {
  const response = {
    success: true,
    failure: null,
    content: content,
    message: message,
  };
  return response;
}

function failure(failure: Presenter["failure"], message: Presenter["message"]) {
  const response = {
    success: false,
    content: null,
    failure: failure,
    message: message,
  };
  return response;
}

const presenter = {
  success,
  failure,
};

export default presenter;
