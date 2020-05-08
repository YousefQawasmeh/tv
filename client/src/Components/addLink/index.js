import React from "react";
import "./index.css";
const HomePage = (props) => {
  return (
    <div className='contener-form'>
      <form className='form' action='/api/add-link' method='POST'>
        <label htmlFor='fname'>Name</label>
        <input type='text' id='fname' name='name' placeholder='Name..' />

        <label htmlFor='description'>Description</label>
        <input
          type='text'
          id='description'
          name='description'
          placeholder='description..'
        />
        <label htmlFor='img-url'>ImgURL</label>
        <input type='text' id='img' name='img' placeholder='Img URL..' />
        <label htmlFor='url'>URL</label>
        <input type='text' id='url' name='url' placeholder='URL..' />

        <br />
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
};
export default HomePage;
