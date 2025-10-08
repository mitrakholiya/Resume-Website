import { useState } from 'react'
import About from './Componentrs/About'
import Resume from './Componentrs/Resume'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './Componentrs/Project'
import Contact from './Componentrs/Contact'




function App() {
  let x1 = createBrowserRouter([{
    path: "/",
    element: <About />
  },
    {
      path: "/resume",
      element: <Resume />
    },
    {
      path:"/project",
      element:<Project/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }

  ])

  return (
    <>
    <RouterProvider router={x1} />
    </>
  )
}

export default App
