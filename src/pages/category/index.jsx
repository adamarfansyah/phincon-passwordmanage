import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataCategories, fetchDataUser } from "../../domain/services";
import capitalize from "../../utils/capitalize";

import { Categories, ListCards } from "../../containers";
import styles from "./category.module.scss";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [users, setUsers] = useState();
  const [categories, setCategories] = useState();

  const filteredCategory = users?.filter((item) => item.category === categoryId);

  useEffect(() => {
    if (categoryId) {
      fetchDataUser().then((user) => setUsers(user));
    }
  }, [categoryId]);

  useEffect(() => {
    fetchDataCategories().then((category) => setCategories(category));
  }, []);

  return (
    <>
      {<Categories payload={categories} params={categoryId} />}
      <div className={styles.categoryPage}>
        {filteredCategory?.length !== 0 ? (
          <ListCards payload={filteredCategory} />
        ) : (
          <h1>{capitalize(categoryId)} dont have any data</h1>
        )}
      </div>
    </>
  );
}
