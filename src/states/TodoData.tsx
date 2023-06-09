import { atom } from "recoil";

const initialTodoData = {
  todos: [
    {
      id: 0,
      todo: "",
      completed: true,
      userId: 0,
    },
  ],
  total: 1,
  skip: 0,
  limit: 1,
};

export type GetAllTodo = {
  todos: GetSingleTodo[];
  total: number;
  skip: number;
  limit: number;
};

export type GetSingleTodo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type UpdateTodo = {
  completed: boolean;
};

export type PostNewTodo = Omit<GetSingleTodo, "id">;

export const todoData = atom<GetAllTodo>({
  key: "todoData",
  default: initialTodoData,
});

export const pageNumber = atom<number>({
  key: "pageNumber",
  default: 1,
});
