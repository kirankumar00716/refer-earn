import React, { useState } from "react";
import Hero from "./components/Hero";
import ReferralModal from "./components/ReferralModal";
import { Toaster } from "react-hot-toast";

function App() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Hero onReferClick={handleOpenModal} />
      <ReferralModal open={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
}

export default App;
