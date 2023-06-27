import axios from "axios";
import { useState } from "react";

/**
 * axios get hook
 * @param url
 * @param initialData (optional)
 * @returns fetchData, data
 */
export default function useAxiosGet<TResponse>(
  url: string,
  initialData: TResponse | null = null
): {
  fetchData: () => Promise<void>;
  data: TResponse | null;
} {
  const [data, setData] = useState<TResponse | null>(initialData);

  const fetchData = async (): Promise<void> => {
    await axios.get(url).then((res) => setData(res.data));
  };

  return { fetchData, data };
}
