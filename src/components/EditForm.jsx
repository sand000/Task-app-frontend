import React from "react";

function EditForm({ handleFormSubmit, formData, handleChange }) {
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",

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
          <button style={{ height: "40px" }}>X</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
