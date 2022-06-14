import React from "react";
import { Field, reduxForm } from "redux-form";

const Input = ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      {touched && error && (
        <div className="ui mini error message" style={{ marginTop: "0.4em" }}>
          <div className="header">{error}</div>
        </div>
      )}
    </div>
  );
};

class StreamForm extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.submitForm(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" label="Enter Title" component={Input} />
        <Field name="description" label="Enter Description" component={Input} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a title";
  }
  if (!formValues.description) {
    errors.description = "Please enter a description";
  }
  return errors;
};

export default reduxForm({ form: "createStream", validate })(StreamForm);
