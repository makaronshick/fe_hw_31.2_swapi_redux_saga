import React from "react";
import Response from "../response/Response.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getSwapiDataAsync2 } from "../../redux/slice/swapiDataSlice.js";
import { clear } from "../../redux/slice/clearSlice.js";
import "./main.styles.css";

export default () => {
  const linkAnchor = "https://swapi.dev/api/";
  const MIN_LINK_LENGTH = 3;

  const dispatch = useDispatch();
  const swapiData = useSelector((state) => state.swapiData);
  const isClear = useSelector((state) => state.clear);

  const onSubmit = ({ link }, formikBag) => {
    dispatch(getSwapiDataAsync2(linkAnchor + link));
    dispatch(clear(false));
  };

  const validate = ({ link }) => {
    const errors = {};
    if (!link.trim()) {
      errors.link = "Link can't be empty";
      return errors;
    }

    if (link.trim().length < MIN_LINK_LENGTH) {
      errors.link = `Link length can't be less than ${MIN_LINK_LENGTH} characters`;
      return errors;
    }

    return errors;
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="input-group-text" id="basic-addon3">
          {linkAnchor}
        </div>
        <Formik
          initialValues={{ link: "" }}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form>
            <Field
              type="text"
              name="link"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
            <ErrorMessage
              name="link"
              component="div"
              className="new_text_error"
            />
            <button type="submit" className="btn btn-light">
              Get info
            </button>
          </Form>
        </Formik>
      </div>
      {isClear ? ( <Response data={""} />) : (<Response data={swapiData} />)}
    </React.Fragment>
  );
};
