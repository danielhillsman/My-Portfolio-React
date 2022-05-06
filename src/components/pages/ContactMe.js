import React from 'react';


export default function Contact() {
  return (
    <div>
      <h1>Connect with Me!</h1>
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
      <br />
      <p2>OR!</p2>
      <br />
    </div>
    </div>

  );
}
