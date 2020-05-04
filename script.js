class Comment extends React.Component {
  constructor() {
    super();
    this.state =
      {
        fields : [
        { author: 'author: moderator' },
        { commentText: 'comment text: test message' },
      ],
      date: new Date()
    }
  }

  handleClick() {
    const fields = this.state.fields;
    fields.push({
      author: this.state.newAuthor,
      commentText: this.state.newCommentText,
      date: this.state.date.toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.fields.map(field => {
              return (
                <h1>
                  {field.author}
                  {field.commentText}
                  {field.date}
                </h1>
              )
            })
          }
        </div>

        <div>
          <form className="CommentForm">
            <label>
              Author name:
              <input
                className="CommentInput"
                type="text"
                placeholder="Name"
                value={this.state.newAuthor}
                onChange={ev => {
                  this.setState({ newAuthor :ev.target.value});
                }}
              />
            </label>
            <label>
              Comment text:
              <textarea
                className="CommentText"
                type="text"
                placeholder="Comment text"
                value={this.state.newCommentText}
                onChange={ev => {
                  this.setState({ newCommentText :ev.target.value});
                }}
              />
            </label>
            <button className="formButton" onClick={this.handleClick}>
              Submit form
            </button>
          </form>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Comment />,
  document.getElementById('app')
);
