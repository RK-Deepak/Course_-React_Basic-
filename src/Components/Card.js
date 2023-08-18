import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Card(props) {

          let coursedetails=props.course;
         let likedcources=props.likedcources;
         let setlikedcourses=props.setlikedcourses;
          let description=(coursedetails.description.length>120)?(`${coursedetails.description.substr(0,130)}...`):coursedetails.description;

          function clickHandler()
          {
                    if(likedcources.includes(coursedetails.id))
                    {
                              setlikedcourses((prev)=>
                              {
                                        return prev.filter((cid)=>
                                        {
                                                  return (coursedetails.id!==cid)
                                        })
                                        
                              })
                              toast.warning("I do not like it")
                    }
                    else 
                    {
                              if(likedcources.length===0)
                              {
                                        setlikedcourses([coursedetails.id]);
                              }
                              else 
                              {
                                        setlikedcourses((prev)=>[...prev,coursedetails.id])
                              }
                              toast.success("Liked it");
                    }
          }

         
  return (
    <div className='w-[300px]  bg-bgDark rounded-md overflow-hidden bg-opacity-75'>
      <div className='relative'>
        <img src={coursedetails.image.url} className='w-[100%] h-[50%] object-cover ' alt=""/>
       
        <div  className='absolute rounded-full w-[30px] h-[30px] bg-white right-2 -bottom-2 flex justify-center items-center'>
        <button onClick={clickHandler}>
          {
 likedcources.includes(coursedetails.id)?<FcLike/>:<FcLikePlaceholder/>
          }
         
        </button>
        </div>
        </div>
        <div className='details p-4'>
          <h2  className='text-white font-bold text-lg leading-5'>{coursedetails.title}</h2>
           <p className='mt-2 text-white text-sm'>{description}</p>
        </div>
    </div>
  )
  }
