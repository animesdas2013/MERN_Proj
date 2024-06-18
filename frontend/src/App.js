import React, {useState, useEffect} from "react";
import axios from 'axios'; 

function App() {
  return (
    <div className="App">
      <FetchData/>
    </div>
  );
}

function FetchData(){
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        console.log("Animesh")
        setData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return <p>{data}</p>
}

export default App;
