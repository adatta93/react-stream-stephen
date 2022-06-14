import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../redux/stream.action";
import StreamForm from "./StreamForm";

class EditStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h3 className="ui top attached block header">Edit Stream</h3>
        <div className="ui attached segment">
          {this.props.stream && (
            <StreamForm
              initialValues={{
                title: this.props.stream.title,
                description: this.props.stream.description
              }}
              submitForm={this.onSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStream: id => dispatch(fetchStream(id)),
    editStream: (id, formValues) => dispatch(editStream(id, formValues))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStream);
