class Comment extends React.Component {
  constructor() {
    super();
    this.state =
      {
        fields : [
        { author: 'moderator' },
        { text: 'test message' },
      ],
      newCommentText:''
    }
  }

  addCommentText(value) {
    const fields = this.state.fields;
    fields.push({
      author: this.state.author,
      text: this.state.newCommentText
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
                  {field.text}
                </h1>
              )
            })
          }
        </div>

        <div>
          <input
            type="text"
            placeholder="Comment text"
            value={this.state.newCommentText}
            onChange={ev => {
              this.setState({ newCommentText :ev.target.value});
            }}
            onKeyDown={ev => {
              if (ev.keyCode ===13) {
                this.addCommentText();
              }
            }}

          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Comment />,
  document.getElementById('app')
);
// <h2>
//      {this.state.date.toLocaleTimeString()}
// </h2>
// {  date: new Date()},
