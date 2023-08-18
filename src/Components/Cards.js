import React from 'react'
import Card from './Card';
import { useState } from 'react';

export default function Cards(props) {
  let courses=props.Courses;
  //GET KEY VALUE PAIR
  let output=courses && courses.data ?courses.data:{};
  
  let category=props.category;
  let setCategory=props.setCategory;
//   console.log(output);
//YAHA ISLIYE DALA KYUNKI SABHI CARDS KE INFO TOH YEH HOGI K ELIKED ME HAI YA NHI
const [likedcources,setlikedcourses]=useState([]);
  function getcources ()
  {
          if(category==="All")
          {
                    let  allcources=[];
                    //GET VALUES OF KEY
                    let stream=Object.values(output);
                    // console.log(stream);
                    stream.forEach((streamid=>
                              {
                                        streamid.forEach((course)=>
                                        {
                                                  allcources.push(course);
                                        })
                              }))
          
                              return allcources;
          }
          else 
          {
                    return output[category];
          }

       
  }
  


  return (
    <div className='w-11/12 max-w-1200px flex flex-wrap max-w-max mx-auto justify-center min-h-[50vh] gap-2'>
        {
          getcources().map( (course)=>
          {
                    return <Card  key={course.id} course={course} likedcources={likedcources} setlikedcourses={setlikedcourses}/>
          })
        }
    </div>
  )
}
