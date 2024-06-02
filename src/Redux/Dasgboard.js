import React from 'react'
import { useSelector } from 'react-redux'


const ManageDasgboard = () => {

  let allBook = useSelector(state => state.Booklist)
  const allproduct = useSelector(state => state.Productlist)
  const allapi = useSelector(state => state.Apilist)

  return (
    <div className='container mt-3'>
      <div className='col-xl-12 text-center'>
        <h3>Manage Dasgboard</h3>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-lg-4">
          <div className="p-4 rounded bg-info bg-info text-white">
            <h4>{allBook.length} <br />  Availabe Book in store</h4>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="p-4 rounded  bg-primary text-white">
            <h4>{allproduct.length} <br /> Availabe Product in store</h4>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="p-4 rounded  bg-success text-white">
            <h4>{allapi.length} <br /> Availabe Blog in store</h4>
          </div>
        </div>
      </div>
      <div className='mt-5 row'>
      {
        allapi.map((blogs, index) => {
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

export default ManageDasgboard