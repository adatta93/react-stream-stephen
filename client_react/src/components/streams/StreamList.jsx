import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../redux/stream.action";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    console.log(this.props);
    const { streams, userId, isSignedIn } = this.props;
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {streams.map(stream => (
            <div className="item" key={stream.id}>
              {stream.userId === userId && (
                <div className="right floated content">
                  <Link
                    to={`/streams/edit/${stream.id}`}
                    className="ui labeled icon tiny primary button"
                  >
                    <i className="edit outline icon"></i>Edit
                  </Link>
                  <Link
                    to={`/streams/delete/${stream.id}`}
                    className="ui labeled icon tiny negative button"
                  >
                    <i className="trash alternate outline icon"></i>Delete
                  </Link>
                </div>
              )}
              <i className="icon camera large middle aligned" />
              <div className="content">
                <Link to={`/streams/${stream.id}`} className="header">
                  {stream.title}
                </Link>
                <div className="description">{stream.description}</div>
              </div>
            </div>
          ))}
        </div>
        {isSignedIn && (
          <div style={{ textAlign: "right" }}>
            <Link to="/streams/new" className="ui large primary button">
              Create Stream
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStreams: () => dispatch(fetchStreams())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
