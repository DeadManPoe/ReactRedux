import React, {Component} from "react";

class BookListComponent extends Component {

    render() {
        var books = this.props.books.map((val,key)=>{
            return <li key={key}>{val}</li>;
        });
        return (
            <ul>
                {books}
            </ul>
        )
    }
}
export default BookListComponent;