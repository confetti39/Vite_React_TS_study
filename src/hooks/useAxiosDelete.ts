import axios from "axios";

export default function useAxiosDelete(url: string): {
  deleteData: () => Promise<void>;
} {
  const deleteData = async () => {
    await axios.delete(url);
  };

  return { deleteData };
}
