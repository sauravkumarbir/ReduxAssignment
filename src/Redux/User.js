import React,{useState} from "react";

const ManageUser=()=>{


    let [alluser,processUser]=useState([]);
    let [newuser,pickUser]=useState([]);

    const save =()=>{
        processUser([...alluser,newuser])
        pickUser("")
    }
    
   return(
    <div className ="container mt-5">
   <div  className="row">
    <div className="col-xl-12 mb-5">
        <h3 className="text-center">Manage User</h3>
        <p className="text-center">
            Enter Full Name: <input type="text" />
            <button className="btn btn-primary m-3">Save</button>
        </p>
       
    </div>
    {
        alluser.map((fullname,index)=>{
            return(
                <div className="col-lg-3 mb-4 text-center" key={index}>
                 <p className="border-p-3">{fullname}</p>
                </div>
            )
        })
    }
   </div>
    </div>
   )
}

export default ManageUser