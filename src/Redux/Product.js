import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ManageProduct = () => {
    let [details, processDetails] = useState({})
    
    const pickValue = (event) => {
        const { name, value } = event.target;
        processDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    }

    const dispatch = useDispatch()

    const save = (event) => {
        event.preventDefault();
        console.log(details);
        let dispatchdata = { type: "newproduct", pinfo: details };
        dispatch(dispatchdata);
        processDetails({}); // clear variables
        event.target.reset(); // reset form
    }

    const deleteProduct = (index) => {
        let dispatchdata = { type: "removeproduct", pindex: index };
        dispatch(dispatchdata);
    }

    const allproduct = useSelector(state => state.Productlist)

    return (
        <div className='container mt-3'>
            <div className='col-xl-12 text-center'>
                <h3>Manage Product : {allproduct.length}</h3>
                <form onSubmit={save}>
                    <input type='text' className='m-3' placeholder='Product Name' name='pname' onChange={pickValue} />
                    <input type='text' className='m-3' placeholder='Product Price' name='price' onChange={pickValue} />
                    <input type='text' className='m-3' placeholder='Product Quantity' name='pqty' onChange={pickValue} />
                    <button className='btn btn-primary' type='submit'>Save</button>
                </form>
            </div>
            <div className='row mt-5'>
                {
                    allproduct.map((product, index) => {
                        return (
                            <div key={index} className='col-lg-3 mb-4'>
                                <h4>{product.pname}</h4>
                                <p>{product.price}</p>
                                <p>In stock: {product.pqty}</p>
                                <button className='btn btn-danger btn-sm -m-2' onClick={() => deleteProduct(index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ManageProduct
