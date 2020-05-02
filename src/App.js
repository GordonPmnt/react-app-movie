import React from 'react';


class App extends React.Component {
  state = {
    title: '',
    poster: '',
    comment: '',
  }

  handleChange = event => {
    const { id, value } = event.target
    this.setState({ [id]: value })
  }

  render() {
    return (
      <>
        <h1 style={{ color: '#E4007C' }}>Please fill in your favorite movie</h1>
        <form>
          <fieldset style={{ margin: '50px' }}>
            <legend style={{ color: '#E4007C' }}>Movie informations</legend>
            <div>
              <label htmlFor="title">Movie name: </label>
              <input
                type="text"
                id="title"
                name="lastname"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </div>
  
            <div>
              <label htmlFor="poster">Movie poster: </label>
              <input
                type="text"
                id="poster"
                name="poster"
                placeholder="Please type the poster URL"
                style={{
                  width: '208px'
                }}
                value={this.state.id}
                onChange={this.handleChange}
              />
            </div>
  
            <div>
              <label 
                htmlFor="comment"
                style={{
                  display: 'flex',
                  alignContent: 'flex-start'
                }}
              >
                Comments: 
              </label>
              <textarea
                style={{
                  width: '300px',
                  height: '75px',
                }}
                id="comment"
                name="comment"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </div>
            <hr />
            <div>
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
