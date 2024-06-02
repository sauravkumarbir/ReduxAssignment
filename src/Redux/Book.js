import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ManageBook = () => {
    let allBook = useSelector(state => state.Booklist)
    let [newBook, pickBook] = useState("")

    let dispatch = useDispatch()
    const save = () => {
        let bookinfo = { type: "addbook", bookname: newBook }
        dispatch(bookinfo) //sending request to redux to save new book
        pickBook("") // clear textfield
    }

    const deleteBook = (index) => {
        let bookinfo = { type: "removebook", bookindex:index }
        dispatch(bookinfo)
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-xl-12 text-center'>
                    <h2>Manage Book</h2>
                    <p>
                        Enter Book Name: <input type='text' placeholder='enter book name' onChange={obj => pickBook(obj.target.value)} value={newBook} />
                        <button className='btn  btn-primary btn-sm ms-2' onClick={save}>Save</button>
                    </p>
                    <h1>{allBook.length}: Total Book in  Store</h1>
                </div>
            </div>
            <div className='row mt-4'>
                {
                    allBook.map((eachBook, index) => {
                        return (
                            <div className='col-lg-2 mb-4 text-center'>
                                <p key={index}>{eachBook}</p>
                                <button onClick={deleteBook.bind(this,index)} className='btn btn-danger btn-sm'>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ManageBook

//when we want the data from redux we used useSelector()