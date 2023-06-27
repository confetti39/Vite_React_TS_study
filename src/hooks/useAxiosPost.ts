import axios from "axios";
import { useState } from "react";

/**
 * axios post hook
 * @param url
 * @param initialData (optional)
 * @returns sendData, data
 */
export default function useAxiosPost<TRequest, TResponse>(
  url: string,
  initialData: TResponse | null = null
): {
  sendData: (dataToSend: TRequest) => Promise<void>;
  data: TResponse | null;
} {
  const [data, setData] = useState<TResponse | null>(initialData);
  const sendData = async (dataToSend: TRequest) => {
    await axios
      .post(url, dataToSend, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setData(res.data));
  };

  return { sendData, data };
}
