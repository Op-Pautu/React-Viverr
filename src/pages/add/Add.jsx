import React from "react";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" />
            <label htmlFor="">Upload Images</label>
            <input type="file" name="" id="" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your service to customers"
            ></textarea>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Add;
