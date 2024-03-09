import { hideMessage } from "@redux/AlertMessage/actions";
import { selectAlert } from "@redux/AlertMessage/selectors";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyledAlert, StyledSnackbar } from "./styles";

function AlertMessage() {
  const dispatch = useDispatch();

  const { open, type, message } = useSelector(selectAlert);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 5000);
    }
  }, [open, dispatch]);

  return (
    <StyledSnackbar data-open={open}>
      <StyledAlert type={type}>{message}</StyledAlert>
    </StyledSnackbar>
  );
}

export default AlertMessage;
