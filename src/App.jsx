import { useEffect } from "react";
import { fetchDataCategories, fetchDataUser } from "./domain/services";
import { useState } from "react";
import HomePage from "./pages/home";

function App() {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([fetchDataUser(), fetchDataCategories()]).then(([users, categories]) => {
      setUsers(users);
      setCategories(categories);
    });
  }, []);

  return <HomePage categories={categories} users={users} />;
}

export default App;
