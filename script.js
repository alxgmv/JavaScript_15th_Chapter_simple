class Comment extends React.Component {
  constructor() {
    super();
    this.state =
      {
        fields : [
          {
            author: 'author: moderator',
            commentText: 'comment text: test message',
            date: new Date().toLocaleString(),
            isVisible: true
          }
        ]
      }
    this.handleSubmit = this.handleSubmit.bind(this),
    this.handleChange = this.handleChange.bind(this),
    this.removeComment = this.removeComment.bind(this)
  }

  removeComment(key) {
    const currentState = this.state.fields.isVisible;
    this.setState({isVisible: !currentState});
    console.log(key)
    console.log(currentState)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]:ev.target.value
    });
  }


  handleSubmit(ev) {
    ev.preventDefault();
    const fields = [...this.state.fields];
    if ( this.state.newAuthor !='' && this.state.newCommentText !='' ) {
      fields.push({
        author: this.state.newAuthor,
        commentText: this.state.newCommentText,
        date: new Date().toLocaleString(),
        isVisible: true
      });
      this.setState({  fields });
    } else {
      alert("empty field!");
    }
    console.log('addcomment');
    console.log(this.state.fields.isVisible);
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.fields.map((field, i) => {
              return (
                <div
                  key = {i}
                  className = {this.state.fields.isVisible ? 'hidden': 'visible'}
                  onClick = {ev => {this.removeComment(i)}}
                >
                  <ul>
                    <li>{field.author}</li>
                    <li>{field.commentText}</li>
                    <li>{field.date}</li>
                  </ul>
                  <button className="formButton">Delete</button>
                </div>
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
