import axios from "axios";
import { useRecoilState } from "recoil";
import { pageNumber, todoData } from "../states/TodoData";

const baseUrl = `https://dummyjson.com/todos`;

export function useAxiosGet(countPerPage: number) {
  const [todos, setTodos] = useRecoilState(todoData);
  const [pageCount, setPageCount] = useRecoilState(pageNumber);

  const fetchData = async (): Promise<void> => {
    await axios
      .get(
        baseUrl +
          `?limit=${countPerPage}&skip=${(pageCount - 1) * countPerPage}`
      )
      .then((res) => setTodos(res.data));
  };

  return { fetchData, todos, pageCount };
}
