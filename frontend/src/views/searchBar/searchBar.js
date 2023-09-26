import './searchBar.css';
import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "@mui/material";

export default function SearchBar({placeholder,data}) {
    const[filteredData,setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord ===""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
         
    };
    return (
        <div className='Search-Bar-Container'>
            <div className='searchBar'>

                <form id="form">
                    <input type = "text" className='inputField' placeholder={placeholder} onChange={handleFilter} />
                </form>
                <SearchIcon onClick={handleFilter} />
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    <Link className={"dataItem"} href={"/SearchResults"}><p>Searching By Drug Name?</p></Link>
                {filteredData.map((value,key)=>{
                    return  <a className='dataItem' href={value.link} >
                         <p>{value.title}</p> </a>
                })}
            </div>
            )}
        </div>
        
    )
}
