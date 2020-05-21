import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class DisLikeLyric extends Component {
  onDislike(id) {
    this.props.mutate({
      variables: { id }
    });
  }
  render() {
    return (
      <div>
        <i className="material-icons" onClick={() => this.onDislike(this.props.lyricId)}>
          thumb_down
        </i>
      </div>
    );
  }
}

const mutation = gql`
  mutation disLikeLyric($id: ID) {
    disLikeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(DisLikeLyric);
