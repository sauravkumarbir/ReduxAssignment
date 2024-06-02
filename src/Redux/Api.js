import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';


const ManageAPI = () => {
  let [allblog, updateblog] = useState([]);

  const getBlog = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(blogArray => {
        updateblog(blogArray)
      })
  }

  useEffect(() => {
    getBlog()
  }, [])

  const dispatch = useDispatch()
  const save = () => {
    let dispatchData = {type:"saveblog" , allData:allblog }
    dispatch(dispatchData)
    alert("Records send to redux")
  }

  return (
    <div className='container mt-3'>
      <div className='col-xl-12 text-center mb-5'>
        <h3>Manage API :{allblog.length}</h3>
        <button className='btn btn-danger m-3' onClick={save}>Save Blog List In Redux</button>
      </div>
       <div className='row'>
       {
        allblog.map((blogs, index) => {
          return (
            <div className='col-md-3 mb-4' key={index}>
              <p className='p-4 border rounded'>{blogs.body}</p>
            </div>
          )
        })
      }
       </div>
    </div>
  )
}

export default ManageAPI