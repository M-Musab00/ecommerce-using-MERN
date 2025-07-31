import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EPage() {
  const navigate = useNavigate();
  const yo = ()=>{
    navigate(-1);
  }
  return (
    <>
    <div>404Page</div>
    <button onClick={yo}>GoBack</button></>
  )
}
