import { useState } from "react";

export const Add = ({ refresh }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (!task || !category || !priority || !date) return;

    const newTask = { 
      task, 
      category, 
      priority, 
      date 
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    setTask("");
    setCategory("");
    setPriority("");
    setDate("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Add New Task
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 rounded "
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-2 rounded "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          onClick={addTask}
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};
