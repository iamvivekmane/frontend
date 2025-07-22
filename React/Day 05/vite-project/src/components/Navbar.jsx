import React ,{useEffect} from 'react'

const Navbar = ({color}) => {

     //1: Run on every render
  useEffect(() => {
    alert("I will run on every render")

  })
  //2: Run on first render
  useEffect(() => {
    alert("I will run on first render")
  },[])

  //2: Run only when certain values changed
  useEffect(() => {
    alert("I will run on change in value")
  },[color])
    

  //CleanUp function
  useEffect(() => {
      alert("Welcome first render of app.jsx");
      return()=>{
        alert("Component was unmounted")
      }
    }, [])
  return (
    <div>
      I am a navbar of {color} color hehe.....
    </div>
  )
}

export default Navbar
