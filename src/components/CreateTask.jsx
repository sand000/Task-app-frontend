import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateTask() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFomData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFomData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { title, description, status, dueDate } = formData;
    if (!title.trim() || !description.trim() || !status.trim() || !dueDate.trim()) {
      alert("All the feilds are required");
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/task/createTask`, formData);
        setFomData({
          title: "",
          description: "",
          status: "",
          dueDate: "",
        });
        alert("Task added successfully");
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div
          style={{
            padding: "20px",
            width: "300px",
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            margin: "100px",
            alignItems: "center",
          }}
        >
          <input
            style={{ margin: "5px", height: "30px", width: "200px" }}
            type='text'
            name='title'
            placeholder='title'
            value={formData.title}
            onChange={handleChange}
          />
          <input
            style={{ margin: "5px", height: "30px", width: "200px" }}
            type='text'
            name='description'
            placeholder='description'
            value={formData.description}
            onChange={handleChange}
          />
          <input
            name='status'
            style={{ margin: "5px", height: "30px", width: "200px" }}
            type='text'
            placeholder='status'
            value={formData.status}
            onChange={handleChange}
          />

          <input
            name='dueDate'
            style={{ margin: "5px", height: "30px", width: "200px" }}
            type='text'
            placeholder='dueDate'
            value={formData.dueDate}
            onChange={handleChange}
          />
          <button type='submit' style={{ backgroundColor: "blue", color: "white" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
