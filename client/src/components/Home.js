import React,{useState,useEffect} from 'react'

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show,setShow]=useState(false);
  const userHome = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data);
      setUserName({ ...userName, name: data.name });
      setShow(true);

      // if (!res.status === 200) {
      //   const error = new Error(res.error);
      //   throw error;
      // }

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    userHome();
  }, [])
  return (
    <div className='home'>
        {/* <p>Welcome</p>
        <h1 className='justfordemo'>Iam learn mern developement</h1> */}
        <center>
            <h1 className=''>Welcome</h1>
            <h1 >{userName.name}</h1> 
            <h2>{show?'Happy, to see u again':"we are mern stack developer"}</h2>
        </center>
    </div>
  )
}

export default Home