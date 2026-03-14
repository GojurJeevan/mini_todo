import { useEffect, useState } from "react";
import { Add } from "./Add";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const filterTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const filtered = storedTasks.filter((item) =>
      item.task.toLowerCase().includes(search.toLowerCase()),
    );

    setTasks(filtered);
  };

  const filterCategory = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const filtered = storedTasks.filter((item) =>
      item.category.toLowerCase().includes(cat.toLowerCase()),
    );

    setTasks(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-8 ">Todo Manager</h1>

      <Add />

      <div className="flex gap-4 mt-8">
        <input
          type="text"
          placeholder="Search Task"
          className="border p-2 rounded bg-white"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={filterTasks}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Search Title
        </button>

        <input
          type="text"
          placeholder="Search Category"
          className="border p-2 rounded bg-white"
          onChange={(e) => setCat(e.target.value)}
        />

        <button
          onClick={filterCategory}
          className="bg-purple-500 text-white px-4 rounded"
        >
          Search Category
        </button>
      </div>

      <div className="mt-10 w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Due Date</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((item, index) => (
              <tr key={index} className="text-center border-t hover:bg-gray-50">
                <td className="p-3">{item.task}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.priority}</td>
                <td className="p-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
