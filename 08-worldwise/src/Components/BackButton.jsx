import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonUI from "./ButtonUI";

const BackButton = () => {
  const navigate = useNavigate ();

  return <ButtonUI type="back" onClick={() => navigate(-1)}>&larr; Back</ButtonUI>;
};

export default BackButton;
