import React, { createContext, useReducer, useEffect } from "react";
import { filterMovieReducer } from "../reducers/filterMovieReducer";

export const FilterMovieContext = createContext();

export const FilterMovieContextProvider = (props) => {

    const [tag, dispatch] = useReducer(filterMovieReducer, {tag_name: "now_playing", tag_index: 0}, () => {
        const localData = localStorage.getItem('tag');
        return localData ? JSON.parse(localData) : {tag_name: "now_playing", tag_index: 0}
    })

    useEffect(() => {
        console.log(tag.tag_name)
        localStorage.setItem('tag', JSON.stringify(tag))
    }, [tag])

    return (
        <FilterMovieContext.Provider value={{tag, dispatch}}>
            {props.children}
        </FilterMovieContext.Provider>
    )
}

export default FilterMovieContextProvider