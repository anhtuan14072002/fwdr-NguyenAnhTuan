import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ListBook from "../page/ListBook";

function Search(props) {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const books = [
        { title: 'Học code today', author: 'Davan',isbn:'1' },
        { title: 'Learn Angular by example', author: 'Fpt-Aptech',isbn:'2' },
        { title: 'Họ nhà trai', author: 'Nguyễn Anh Tuấn',isbn:'3' },
        { title: 'Đôi mắt có lửa', author: 'Nguyễn Hùng Sơn',isbn:'4' }
    ];   
    
    const handleSearch = () => {
        const result = books.filter(book => {
            return book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
        });
        setSearchResult(result);
    };

    return(
        <>
         <button type="button" onClick={handleSearch}><CiSearch /></button> <input type="text" value={search}  onChange={e => setSearch(e.target.value)} class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Enter..."></input>
        </>
        
    );
}
export default Search;