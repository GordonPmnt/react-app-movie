import React from 'react';


const App = () => {
  return (
    <>
      <h1>Please fill in your favorite movie</h1>
      <form>
        <fieldset>
          <legend>Movie informations</legend>
          <div>
            <label htmlFor="movieName">Movie name</label>
            <input
              type="text"
              id="movieName"
              name="lastname"
            />
          </div>

          <div>
            <label htmlFor="posterUrl">Movie poster</label>
            <input
              type="text"
              id="posterUrl"
              name="posterUrl"
              placeholder="Please type the poster URL"
            />
          </div>

          <div>
            <label htmlFor="comments">Comments</label>
            <input
              type="textarea"
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

export default App;
