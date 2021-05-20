import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const AppointmentForm = ({
  closeModal,
  date,
  openModal,
  modalIsOpen,
  appointmentOn,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.createdOn = new Date();
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("data sent to server");
        }
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5>{date.toDateString()}</h5>
        <h1 style={{ color: "green" }}>{appointmentOn}</h1>
        <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-input"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <br />
          <br />
          <input
            className="form-input"
            placeholder="address"
            {...register("address", { required: true })}
          />
          <br />
          <br />
          <input
            className="form-input"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <br />
          <br />
          <input
            className="form-input"
            placeholder="phone"
            {...register("phone", { required: true })}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
