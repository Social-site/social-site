'use client';

import {useState, useEffect} from 'react'
import Card from '@/components/Card';
// import Form from '@/components/Form';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { PlusCircle } from 'lucide-react';

const Page  = () => {
  const fillerPlace = {userName: "Your User Name",
                      title: "Your Place",
                      img : "https://placehold.co/600x400",
                      info : "Your Info",
                      location : "The Location",
                      key: "0"                    
                    } 
  // const [placeholder, setPlaceHolder] = useState (fillerPlace)
  const [places, setPlaces] = useState([])
  const [placeObject, setPlaceObject] = useState(fillerPlace)
  
  // const [deleteNum, setDeleteNum] = useState (0)
  // const handleInputChange =(event) => {

  //   setPlaceHolder([event.target.name]: event.target.value)

  // }

  const handleInputChange = (event) => {
    setPlaceObject({
      ...placeObject,
      [event.target.name]: event.target.value
        })
        // if (event.target.name === "img" && event.target.value ===""){
        //   setPlaceObject({[event.target.name]: "https://placehold.co/600x400"})
        // }
  }

  const handleSubmit =(event)=> {
    event.preventDefault();
    setPlaces((prevPlaces) => {
      const updatedPlaces = [...prevPlaces, placeObject];
      localStorage.setItem('places', JSON.stringify(updatedPlaces));
      return updatedPlaces;
  });
  }
  

  return (
    <div className="ml-20 flex flex-wrap gap-10 mt-10 mb-10 " >
    

    {/* Form To Create Post */}
    <div className="w-1/2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-center mt-5 mb-2 text-xl font-bold tracking-tight text-gray-700">Tell Us About Your Favorite Place</h5>
        <form className="flex ml-5 mr-5 flex-col gap-4" onSubmit={handleSubmit}>
        

      {/* Place Name   */}
      <div>
        <div className="ml-3 block">
          <Label htmlFor="email1" value="Place Name" />
        </div>
        <TextInput className="ml-3" id="placeName" type="text" placeholder="What is the place called" onChange={handleInputChange}
                 name="title" required />
        
      </div>


      {/* User Name */}
      <div>
        <div className="ml-3 block">
          <Label  htmlFor="password1" value="User Name" />
        </div>
        <TextInput className="ml-3" id="userName" type="text" placeholder="What is your Name" name="userName" onChange={handleInputChange} required />
      </div>

      {/* Place Info */}
      <div>
      <div className="ml-3 block">
          <Label  htmlFor="placeInfo" value="Place Info" />
        </div>
        <TextInput className="ml-3" id="placeInfo" type="text" placeholder="Tell us about it" name="info" onChange={handleInputChange}/>
      </div>



      {/* Place Location */}
      <div>
      <div className="ml-3 block">
          <Label  htmlFor="placeInfo" value="Place Location" />
        </div>
        <TextInput className="ml-3" id="placeLocation" type="text" placeholder="Where is it?" name="location" onChange={handleInputChange}/>
      </div>


      {/* Place URL */}
      <div>
        <div className="ml-3 block">
          <Label  htmlFor="img" value="Photo URL" />
        </div>
        <TextInput className="ml-3" id="img" type="text" placeholder="http://mypicture.com" name="img" onChange={handleInputChange}/>
      </div>
      

      {/* Submit Button */}
      <Button className="ml-auto mr-auto mb-5 text-center w-14 px-3 py-2 text-sm font-light text-white bg-gray-300 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit"><PlusCircle /></Button>
    </form>

    </div>

    {/* Card To SHow Post being Built */}
    <Card title={placeObject.title}
                img={placeObject.img}
                userName={placeObject.userName}
                info={placeObject.info}
                location={placeObject.location}
            />
        
        
        
    </div>
  )
}

export default Page