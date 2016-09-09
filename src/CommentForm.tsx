import * as React from "react";
import {CommentData} from "./Comment";

export interface CommentFormProps extends React.Props<CommentForm> {
  author?: string;
  text?: string;
  onCommentSubmit: (data: CommentData) => any;
}

export interface CommentFormState {
  author?: string,
  text?: string
}

export class CommentForm extends React.Component<CommentFormProps, CommentFormState> {
  constructor(props: CommentFormProps) {
    super(props);
    this.state = { author: '', text: '' };
  }
  handleAuthorChange(e: Event) {
    this.setState({ author: (e.target as HTMLInputElement).value });
  }
  handleTextChange(e: Event) {
    this.setState({ text: (e.target as HTMLInputElement).value });
  }
  handleSubmit(e: Event) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
          />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
          />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
