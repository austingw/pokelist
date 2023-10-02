import axios from "axios";

interface getListParams {
  searchTerm: string;
  page: number;
}

const getList = async ({ searchTerm, page }: getListParams) => {
  const response = await axios
    .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/pokemon`, {
      params: {
        searchTerm,
        page,
      },
    })
    .catch((err) => {
      console.error("Err", err);
    })
    .then((res) => {
      return res?.data;
    });

  const data = response?.data;

  return data;
};

export default getList;
