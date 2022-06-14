import React from "react";
import { fetchStream } from "../../redux/stream.action";
import { connect } from "react-redux";

class ShowStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return (
      <>
        {this.props.stream && (
          <div>
            <h1>{this.props.stream.title}</h1>
            <h2>{this.props.stream.description}</h2>
          </div>
        )}
      </>
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
    fetchStream: id => dispatch(fetchStream(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowStream);
