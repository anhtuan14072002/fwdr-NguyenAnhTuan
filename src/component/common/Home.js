
import '../../css/Home.css'
import ListBook from "../page/ListBook";
import Author from "./Author";
import AddBook from "./AddBook";
import Search from "./Search";
function Home(props) {
    return(
        <>
        <div className="form-nav">
            <div className="search-nav">
                <Search/>
            </div>
            <div className="list-book">
                <h3>A list of Books</h3>
                <ListBook/>
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