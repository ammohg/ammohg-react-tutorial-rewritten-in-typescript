import * as React from "react";
import * as Remarkable from "remarkable";

export interface CommentData {
  author: string;
  text: string;
  id?: number;
}
export interface CommentProps extends React.Props<Comment> {
  author?: string;
  id?: string;
  text?: string;
}

export class Comment extends React.Component<CommentProps, {}> {
  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup: string = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup() } />
      </div>
    );
  }
}
