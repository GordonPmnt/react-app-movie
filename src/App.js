import React from 'react';
import axios from 'axios';


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

  handleSubmit = event => {
    event.preventDefault()
    axios
    .post(
      'https://post-a-form.herokuapp.com/api/movies/',
      this.state,
    )
    .then(
      response => alert(`Movie added with id: ${response.data.id}!`)
    )
    .catch(
      error => console.log(error)
    )
  }

  render() {
    return (
      <>
        <h1 style={{ color: '#E4007C' }}>Please fill in your favorite movie</h1>
        <form onSubmit={this.handleSubmit}>
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
                required
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
                required
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
                required
              />
            </div>
            <hr />
            <div>
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>

        <fieldset style={{ margin: '50px' }}>
          <legend style={{ color: '#E4007C' }}>Preview</legend>
          <p>Title: {this.state.title}</p>
          <img 
            src={this.state.poster} 
            alt="movie poster"
            style={{ width: '100px'}}
          />
          <p>Comments: </p>
          <p style={{ whiteSpace: 'pre-wrap' }}>{this.state.comment}</p>
        </fieldset>
      </>
    );
  }
}

export default App;
