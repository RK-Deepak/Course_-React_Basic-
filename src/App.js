
import React from 'react'
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
import Loading from './Components/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import { filterData,apiUrl } from './data';




const App = () => {

  const [loadingx,setloadingx]=useState(true);
  const [Courses,setcourses]=useState([]);
  const [category,setCategory]=useState(filterData[0].title);
 


  async function fetchdata()
  {
    setloadingx(true);
    let data=await fetch(apiUrl);
    let output=await data.json();

    setcourses(output);

    setloadingx(false);


  }

  useEffect(()=>
  {
    fetchdata();
  },[]);
return (
  <div  className="flex flex-col min-h-screen ">
     <Navbar/>
      <div class=" bg-bgDark2">
       
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      <div className="flex justify-center items-center min-h-screen">
       {
        loadingx?(<Loading/>):(<Cards Courses={Courses}  category={category} setCategory={setCategory}/>)
       }
       </div>
      </div>
      
     </div>
      
      
   
    
  
  )
};

export default App;
