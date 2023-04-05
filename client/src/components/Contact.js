import React, { useEffect, useState } from 'react'


const Contact = () => {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
  const userContactPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    userContactPage();
  }, [])


  //we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });

  }

  //send the data to backend
  const contactform = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        name, email, phone, message
      })
    })
    const data = await res.json();
    if(!data){
      console.log("message not send");
    }
    else{
      alert("message send");
      setUserData({...userData,message:""});
    }


  }
  return (
    <>
      <div>
        <h1>
          <center>
            You can contact me at the prudvirajkaukuntla3@gmail

          </center>
        </h1>
      </div>
      <div>
        <form method='POST'>
          <div className='onlyone'>
            <input className='contactus' name='name' onChange={handleInputs} value={userData.name} type="text" id="contact_form_name" placeholder='Your Name' required="ture" />
            <br />
            <input className='contactus' name='email' onChange={handleInputs} value={userData.email} type="email" id="contact_form_email" placeholder='Your Email' required="true" />
            <br />
            <input className='contactus' name='phone' onChange={handleInputs} value={userData.phone} type="number" id="contact_form_number" placeholder='Your number' required="ture" />
            <br />
          </div>
          <textarea className='contactus' name='message' onChange={handleInputs} value={userData.message} cols="100" rows="10" id="contact_form_message" placeholder='Your Message' required="true" />
          <br />
          <input className='contactus mr-10' onClick={contactform} type="submit" id="contact_form_submit" value="Send Message" />
        </form>
      </div>
    </>
  )
}

export default Contact