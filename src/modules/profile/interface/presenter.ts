import { Prisma } from "@prisma/client";
import Profile from "../domain/entity";

interface Presenter {
  success: boolean | null;
  failure: unknown | null;
  content: Profile | Profile[] | Prisma.BatchPayload;
  message: string | null;
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
