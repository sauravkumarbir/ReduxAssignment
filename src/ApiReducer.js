import React from 'react'

const Apilist = (state = [], action) => {

    let data = Object.assign([], state)
    
    if (action.type === "saveblog")
        data = action.allData


    return data

}

export default Apilist