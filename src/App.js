import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';
import { constants } from './components/constants';


function App() {
    const [mainData, setMainData] = useState([]);    
    const getDataFromDB = async() => {
        try{
            const response = await axios.get(constants.URL+ "/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
   
    useEffect(()=>{
        getDataFromDB();
    },[])
    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

  return (
    <div>
  
      <Tabsrow data={mainData} setMainData={setMainData} />
    </div>
  );
}

export default App;
