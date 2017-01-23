import { render } from "react-dom";
import React from "react";
import { createStore,combineReducers,applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";
import App from "./containers/app"

const mathReducer=(state={
	result: 1,
	lastValues:[]
	},action)=>{
	switch(action.type){
		case "ADD":
			state={
				...state,
				result:state.result+action.payload,
				lastValues:[...state.lastValues,action.payload]
			};
		
			break;
		case "SUB":
		state={
				...state,
				result:state.result-action.payload,
				lastValues:[...state.lastValues,action.payload]
			};
		
			break;
		case "MUL":
			state={
				...state,
				result:state.result*action.payload,
				lastValues:[...state.lastValues,action.payload]
			};
			
			break;
		case "DIV":
			state={
				...state,
				result:state.result/action.payload,
				lastValues:[...state.lastValues,action.payload]
			};
			
			break;
	}
	return state;
};

const userReducer=(state={
	name: "Manoj",
	age:22
	},action)=>{
	switch(action.type){
		case "SET_NAME":
			state={
				...state,
				name:action.payload
			};
		
			break;
		case "SET_AGE":
		state={
				...state,
				age:action.payload
			};
		
			break;
	}
	return state;
};

const myLogger=(store)=>(next)=>(action)=>{
	console.log("Logger action:",action);
	next(action);
}
const store =createStore(
		combineReducers({mathReducer,userReducer}),
		{},
		applyMiddleware(logger())
		);

store.subscribe(()=>{
	// console.log("store updated",store.getState());
});


render(
	<Provider store={store}>
		<App/>
	</Provider>,
	window.document.getElementById("app"));

