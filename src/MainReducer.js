import {combineReducers} from "redux"

import Booklist from "./BookReducer";
import Productlist from "./ProductReducer";
import Apilist from "./ApiReducer";

const AllReducer = combineReducers(
    {Booklist, Productlist, Apilist}
)

export default AllReducer