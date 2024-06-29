// import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmiting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
          resolve();
        }, d*1000);
    })
  }



  const onSubmit = async (data) => {
    await delay(3)
    console.log(data)
  }
  return (
    <>
    {isSubmiting && <div>Loading...</div>}    
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} >
          <input {...register("username",{ required: {value:true,message:"This feild is required"}, maxLength: {value:8,message:"max length is 8"},minLength:{value:3,message: "length is to short"} })} type="text" placeholder="username" />
          {errors.username && <div>{errors.username.message}</div>} 
       
          <input {...register("password",{minLength:8,message:"mini length is 8"})} type="password"placeholder='password' /> 
          {errors.password && <div>{errors.password.message}</div>} <br />
          <input disabled={isSubmiting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
