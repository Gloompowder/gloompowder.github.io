import * as React from "react";
import { BsSearch } from 'react-icons/bs';
import { useParams } from "react-router-dom";


function SecondNav(props) {
    const params = useParams()
    return (
        <div className="SecondNav">
            <div className = "searchbar">
            <form >
        <label htmlFor="header-search">
        </label>
        <input
            className = 'searchbox'
            type="text"
            id="header-search"
            placeholder={props.search + " projects"}
            name="s" 
        />
        <button type="submit" onClick={(e)=>console.log('searching') }><BsSearch/>Search</button>
    </form>
            </div>
        </div>
    );
  }
  
