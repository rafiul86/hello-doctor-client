import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const Admin = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    fetch("http://localhost:5000/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} lg={2}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={12} md={5} lg={10}>
            <h1 className="text-center">Add Doctors</h1>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  onBlur={handleBlur}
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input
                  type="name"
                  name="name"
                  class="form-control"
                  onBlur={handleBlur}
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Upload File</label>
                <input
                  type="file"
                  class="form-control"
                  onChange={handleFileChange}
                  placeholder="Upload Files here"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Admin;
