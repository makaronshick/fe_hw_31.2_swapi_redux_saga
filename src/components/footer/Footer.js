import React from "react";
import { useDispatch } from "react-redux";
import {clear} from "../../redux/slice/clearSlice.js";
import "./footer.styles.css";

export default () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(clear(true));
  };

  return (
    <div className="footer">
      <button className="btn btn-light" onClick={onClick}>Clear data</button>
    </div>
  );
};
