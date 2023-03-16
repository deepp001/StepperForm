import React from "react";
import BasicTable from "../components/BasicTable";
import ButtonsTheme from "../Themes/ButtonsTheme";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const navigate = useNavigate();
  const onStepper = () => {
    navigate("/");
  };
  return (
    <div>
      <ButtonsTheme onClick={onStepper} variant="contained">
        Go to Stepper Form
      </ButtonsTheme>
      <BasicTable />
    </div>
  );
};

export default AdminPage;
