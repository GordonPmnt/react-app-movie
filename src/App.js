import React from 'react';


class App extends React.Component {
  state = {
    title: '',
    poster: '',
    comment: '',
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
                comment: 
              </label>
              <textarea
                style={{
                  width: '300px',
                  height: '75px',
                }}
                id="comment"
                name="comment"
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
