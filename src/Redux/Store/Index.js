import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import index from "../Reducer/index"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(index, composeWithDevTools(applyMiddleware(thunk)))

export default store
