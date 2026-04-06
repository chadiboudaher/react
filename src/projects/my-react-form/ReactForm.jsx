import "./ReactForm.css";
// import { React, useState } from "react";

function ReactForm() {
  return (
    <>
      <div className="app">
        <h1>Form in React</h1>
        <fieldset>
          <form action="" method="get">
            <label htmlFor="firstname">First Name*</label>
            <input type="text" name="firstname" id="firstname" />
            <label htmlFor="lastname">Last Name*</label>
            <input type="text" name="lastname" id="lastname" />
            <label for="email">Enter Email* </label>
            <input type="email" name="email" id="email" />
            <label for="tel">Contact*</label>
            <input type="tel" name="contact" id="contact" />
            <label htmlFor="gender">Gender*</label>
            <input type="radio" name="gender" id="male" value="male" />
            Male
            <input type="radio" name="gender" id="female" value="female" />
            Female
            <label htmlFor="lang">Your Best Subject</label>
            <input type="checkbox" name="lang" id="english" />
            English
            <input type="checkbox" name="lang" id="maths" />
            Maths
            <input type="checkbox" name="lang" id="physics" />
            Physics
            <label htmlFor="file">Upload Resume*</label>
            <input
              type="file"
              name="file"
              id="file"
              placeholder="Enter Upload File"
            />
            <label htmlFor="url">Enter URL*</label>
            <input type="url" name="url" id="url" placeholder="Enter url" />
            <label>Select your Choice</label>
            <select name="select" id="select">
              <option value="" disabled>
                Select your Ans
              </option>
              <optgroup label="advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="t">MongoDB</option>
              </optgroup>
            </select>
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              placeholder="About your self"
            ></textarea>
            <button type="reset" value="reset">
              Reset
            </button>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default ReactForm;
