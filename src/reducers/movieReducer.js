import React from 'react';

const defaultState = {
    keywords: "",
    language: "",
    region: ""
}

const movieReducer = (state = defaultState, action) => {    
    switch(action.type) {
        case "ADD_KEYWORD": 
            return {                
                ...defaultState,
                keywords: action.payload,
            }
        case "REMOVE_KEYWORD":
            return {                
                ...defaultState,
                keywords: "",
            }            
        case "ADD_LANGUAGE":
            return {                
                ...defaultState,
                language: action.payload,
            }
        case "REMOVE_LANGUAGE":
            return {                
                ...defaultState,
                language: "",
            }          
        case "ADD_REGION":
            return {                
                ...defaultState,
                region: action.payload,
            }
        case "REMOVE_REGION":
            return {                
                ...defaultState,
                region: "",
            }          
        default:
            return {
                defaultState
            }
    }
}

export default movieReducer;