/* eslint-disable react/prop-types */
import { ListCards, Categories } from "../../containers";

export default function HomePage({ categories, users }) {
  return (
    <>
      <Categories payload={categories} params="" />
      <ListCards payload={users} />
    </>
  );
}
