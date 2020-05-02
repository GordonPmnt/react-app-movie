import React from 'react';


class App extends React.Component {
  
  render() {
    return (
      <>
        <h1 style={{ color: '#E4007C' }}>Please fill in your favorite movie</h1>
        <form>
          <fieldset style={{ margin: '50px' }}>
            <legend style={{ color: '#E4007C' }}>Movie informations</legend>
            <div>
              <label htmlFor="movieName">Movie name: </label>
              <input
                type="text"
                id="movieName"
                name="lastname"
              />
            </div>
  
            <div>
              <label htmlFor="posterUrl">Movie poster: </label>
              <input
                type="text"
                id="posterUrl"
                name="posterUrl"
                placeholder="Please type the poster URL"
                style={{
                  width: '208px'
                }}
              />
            </div>
  
            <div>
              <label 
                htmlFor="comments"
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
                id="comments"
                name="comments"
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
