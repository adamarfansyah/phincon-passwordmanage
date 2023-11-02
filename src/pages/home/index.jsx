/* eslint-disable react/prop-types */
import { ListCards, Categories } from "../../containers";
import { fetchDataUser } from "../../domain/services";

export default function HomePage({ categories, users, setUsers }) {
  const fetchUser = async () => {
    try {
      const res = await fetchDataUser();
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Categories payload={categories} params="" />
      <ListCards payload={users} fetchUser={fetchUser} />
    </>
  );
}
