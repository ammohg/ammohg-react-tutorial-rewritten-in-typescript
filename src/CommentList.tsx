import * as React from "react";
import {Comment, CommentData} from "./Comment";

export interface CommentListProps extends React.Props<CommentList> {
  data: CommentData[];
}

export class CommentList extends React.Component<CommentListProps, {}> {
  render() {
    const commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
