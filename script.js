class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [
        { author: 'moderator' },
        { text: 'test message' },
      ]
    };
    {
      date: new Date()
    };

  }

  render() {
    return (
      <div>
        <h1>
          {
            this.state.options.map(options => {
              return(
                <div>
                  {options.author}
                  {options.text}
                </div>
              )
            })
          }
          </h1>
          <h2>
            It is {this.state.date.toLocaleTimeString()}.
          </h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Comment />,
  document.getElementById('app')
);
