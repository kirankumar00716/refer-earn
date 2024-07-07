import React from "react";
import { Modal, Box, TextField, Button, Backdrop } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import axios
import toast from "react-hot-toast";

const ReferralModal = ({ open, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      referrer: "",
      referee: "",
      course: "",
      email: "",
    },
    validationSchema: Yup.object({
      referrer: Yup.string().required("Required"),
      referee: Yup.string().required("Required"),
      course: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const api = axios.create({
          baseURL: "http://localhost:3000/",
        });
        const response = await api.post("/api/referrals", values);
        console.log(response);
        toast.success("Referral submitted successfully");
        handleClose();
      } catch (error) {
        toast.error("Error submitting referral");
      }
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backdropFilter: "blur(5px)",
        },
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 10,
          p: 4,
        }}
      >
        <TextField
          name="referrer"
          label="Your Name"
          value={formik.values.referrer}
          onChange={formik.handleChange}
          error={formik.touched.referrer && Boolean(formik.errors.referrer)}
          helperText={formik.touched.referrer && formik.errors.referrer}
          fullWidth
          margin="normal"
        />
        <TextField
          name="referee"
          label="Friend's Name"
          value={formik.values.referee}
          onChange={formik.handleChange}
          error={formik.touched.referee && Boolean(formik.errors.referee)}
          helperText={formik.touched.referee && formik.errors.referee}
          fullWidth
          margin="normal"
        />
        <TextField
          name="course"
          label="Course"
          value={formik.values.course}
          onChange={formik.handleChange}
          error={formik.touched.course && Boolean(formik.errors.course)}
          helperText={formik.touched.course && formik.errors.course}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Friend's Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
