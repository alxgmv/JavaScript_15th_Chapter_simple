class Comment extends React.Component {
  constructor() {
    super();
    this.state =
      {
        fields : [
        { author: 'author: moderator' },
        { commentText: 'comment text: test message' },
      ],
      date: new Date(),
      newAuthor:'',
      newCommentText:''
    }
    this.handleSubmit = this.handleSubmit.bind(this),
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(ev) {
    this.setState({
      [ev.target.name]:ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const fields = this.state.fields;
    if ( (this.state.newAuthor !='') && (this.state.newCommentText!='') ) {
      fields.push({
        author: this.state.newAuthor,
        commentText: this.state.newCommentText,
      });
      this.setState({  fields  });
    }  else {
      alert("empty field!");
    }
    console.log('addcomment');
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
                </h1>
              )
            })
          }
        </div>

        <div>
          <form className="CommentForm" onSubmit={this.handleSubmit}>
            <label>
              Author name:
              <input
                name="newAuthor"
                className="CommentInput"
                type="text"
                placeholder="Name"
                value={this.state.newAuthor}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Comment text:
              <textarea
                name="newCommentText"
                className="CommentText"
                type="submit"
                placeholder="Comment text"
                value={this.state.newCommentText}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" className="formButton">Submit</button>
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
