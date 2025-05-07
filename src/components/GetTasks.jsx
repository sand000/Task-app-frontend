import React, { useState, useEffect } from "react";
import axios from "axios";
import EditForm from "./EditForm";

function GetTasks() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [task, setTask] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFomData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const [editedTaskId, setEditedTaskId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFomData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/task/getTasks`);
      setIsLoading(false);
      setIsError(false);
      setTask(response.data.response);
    } catch (error) {
      setIsError(true);
      console.log("Error", error);
    }
  };

  const handleTaskDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/task/deleteTask/${id}`);
      setIsLoading(false);
      setTask(response.data.response);
      getData();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleTaskEdit = ({ id, task }) => {
    setShowEditForm(true);
    setEditedTaskId(id);
    setFomData(task);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${BASE_URL}/task/updateTask/${editedTaskId}`, formData);
      setFomData({
        title: "",
        description: "",
        status: "",
        dueDate: "",
      });
      alert("Task updated successfully");
      getData();
      setShowEditForm(false);
    } catch (error) {
      setIsError(false);
      console.log("Error", error);
    }
  };

  console.log("aap, url", BASE_URL);

  return (
    <div>
      {" "}
      {isLoading ? <h1>Loading....</h1> : ""}
      {isError ? <h1>Error</h1> : ""}
      {task?.map((e, i) => (
        <div
          key={i}
          style={{
            padding: "20px",
            margin: "25px",
            display: "flex",
            flexDirection: "row",
            border: "1px solid black",
            justifyContent: "space-between",
            width: "100vh",
            borderRadius: "5px",
          }}
        >
          <div>
            {" "}
            <h3 style={{ lineHeight: 0 }}>
              {i + 1}. {e.title}
            </h3>
            <p>{e.description}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <button
              style={{ backgroundColor: "blue", color: "white", height: "40px" }}
              onClick={() => handleTaskEdit({ id: e._id, task: e })}
            >
              Edit
            </button>
            <button
              style={{ backgroundColor: "red", color: "white", marginLeft: "20px", height: "40px" }}
              onClick={() => handleTaskDelete(e._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {showEditForm ? (
        <EditForm
          handleFormSubmit={handleFormSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default GetTasks;
