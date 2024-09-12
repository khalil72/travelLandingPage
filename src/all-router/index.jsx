import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home-page'

const AllRouter = () => {
  return (
    <Routes>
        <Route exact path={'/'} element={<HomePage />}/>
        

    </Routes>
  )
}

export default  AllRouter