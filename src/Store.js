import { legacy_createStore as createStore } from "redux";
import AllReducer from "./MainReducer";

const MyStore=createStore(AllReducer)

export default MyStore