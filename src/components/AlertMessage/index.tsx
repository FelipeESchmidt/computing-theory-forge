import { hideMessage } from "@redux/AlertMessage/actions";
import { selectAlert } from "@redux/AlertMessage/selectors";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { StyledAlert, StyledCloseButton, StyledSnackbar } from "./styles";

function AlertMessage() {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const { open, type, message } = useSelector(selectAlert);

  const clearTimer = () => {
    setTimer(undefined);
    if (timer) {
      clearTimeout(timer);
    }
  };

  const handleClose = () => {
    clearTimer();
    dispatch(hideMessage());
  };

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        dispatch(hideMessage());
      }, 5000);
      setTimer(t);
    }
    return clearTimer;
  }, [open, dispatch]);

  return (
    <StyledSnackbar data-open={open}>
      <StyledAlert type={type}>{message}</StyledAlert>
      <StyledCloseButton onClick={handleClose}>
        <FaTimes />
      </StyledCloseButton>
    </StyledSnackbar>
  );
}

export default AlertMessage;
