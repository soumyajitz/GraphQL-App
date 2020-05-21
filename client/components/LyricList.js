import React, { Component } from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import DisLikeLyric from "./DisLikeLyric";

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({
      variables: {
        id
      }
    })
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up 
          </i>
          {likes}
          <DisLikeLyric lyricId={id} />
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation likeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
   }
`;

export default graphql(mutation)(LyricList);
