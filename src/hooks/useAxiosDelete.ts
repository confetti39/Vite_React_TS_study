import axios from "axios";

/**
 * axios delete hook
 * @param url
 * @returns deleteData
 */
export default function useAxiosDelete(url: string): {
  deleteData: () => Promise<void>;
} {
  const deleteData = async () => {
    await axios.delete(url);
  };

  return { deleteData };
}
