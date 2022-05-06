import React from 'react';


export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="wrapper">
      <form>
      <fieldset>
         <label>
           <p>First Name:</p>
           <input name="firstName" />
           <p>Last Name</p>
           <input name="lastName" />
           <p>E-mail Address:</p>
           <input email="emailAddy" />
           <p>Extra Detail:</p>
           <input detail="extra" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
        
    <div class="contactBox">
        <br></br>
        <p2>OR!</p2>
        <br></br>
        <p2>Contact me at these links:</p2>
            <p>
            <br></br>
            My <a class="contactLinks" href="https://www.linkedin.com/in/daniel-hillsman/">Linkedin! </a>
            <br></br>
            Check out my <a class="contactLinks" href="https://github.com/danielhillsman">GitHub! </a>
            <br></br>
            Or <a class="contactLinks" href = "mailto:daniel.loves.junk@gmail">E-mail</a> Me!
            <br></br>
            daniel.loves.junk@gmail.com
            </p>

    </div>
    </div>

  );
}
