import axios from "axios";
import { useState } from "react";

/**
 * axios put hook
 * @param url
 * @param initialData (optional)
 * @returns sendData, data
 */
export default function useAxiosPut<TRequest, TResponse>(
  url: string,
  initialData: TResponse | null = null
): {
  sendData: (dataToSend: TRequest) => Promise<void>;
  data: TResponse | null;
} {
  const [data, setData] = useState<TResponse | null>(initialData);

  const sendData = async (dataToSend: TRequest) => {
    await axios
      .put(url, dataToSend, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setData(res.data));
  };

  return { sendData, data };
}
