import axios from "axios";

const getList = async () => {
  const response = await axios
    .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/pokemon`)
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
