import { IoIosAddCircleOutline } from "react-icons/io";
function AddBook(props){
    return(
        <div className="add-book">
            <div className="add1">
                <h3>Add a new Book</h3>
                <h6>Title</h6>
            </div>
            <input class="form-control" type="text" list="datalistOptions" id="exampleDataList" placeholder="Enter..."></input>
            <div className="add2">
                <h6>Author</h6>
            </div>
            <input class="form-control" type="text" list="datalistOptions" id="exampleDataList" placeholder="Enter..."></input>
            <div className="favourite">
                <h6>Favourite:  <input type="checkbox"></input></h6>
                <button className="btn btn-primary"><IoIosAddCircleOutline /> Add </button>
            </div>
        </div>
    ); 
}
export default AddBook;