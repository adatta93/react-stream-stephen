import React from "react";
import { connect } from "react-redux";
import { createStrem } from "../../redux/stream.action";
import StreamForm from "./StreamForm";

class CreateStream extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3 className="ui top attached block header">Create Stream</h3>
        <div className="ui attached segment">
          <StreamForm submitForm={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createStream: formValues => dispatch(createStrem(formValues))
  };
};

export default connect(null, mapDispatchToProps)(CreateStream);
