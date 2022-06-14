import React from "react";
import Modal from "../Modal";
import { history } from "../../App";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../redux/stream.action";
import { Link } from "react-router-dom";

class DeleteStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderAction() {
    return (
      <>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <div className="ui negative button" onClick={this.onDeleteClick}>
          Delete
        </div>
      </>
    );
  }

  render() {
    console.log(this.props);
    return (
      <Modal
        header={"Delete Stream"}
        content={
          !this.props.stream
            ? "Are you sure you want to delete?"
            : `Are you sure you want to delete ${this.props.stream.title}?`
        }
        actions={this.renderAction()}
        onDismiss={() => history.push("/")}
      />
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
    deleteStream: id => dispatch(deleteStream(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStream);
