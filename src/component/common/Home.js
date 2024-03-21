import { CiSearch } from "react-icons/ci";
import '../../css/Home.css'
import ListBook from "../page/ListBook";
import Author from "./Author";
import AddBook from "./AddBook";
function Home(props) {
    return(
        <>
        <div className="form-nav">
            <div className="search-nav">
                <button><CiSearch /></button> <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Enter..."></input>
            </div>
            <div className="list-book">
                <h3>A list of Books</h3>
            </div>
            <div className="author-book">
                <Author/>
            </div>
            <div className="addToBook">
                <AddBook/>
            </div>
        </div>
        </>
    )
}
export default Home;