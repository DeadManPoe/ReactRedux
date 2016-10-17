import React, { Component } from 'react';
import BookListComponent from './BookListComponent';
import BookSearchComponent from './BookSearchComponent';

class CollectionComponent extends Component {
    render(){
        return (
            <div>
                <h1>Title</h1>
                <BookListComponent books={['Giorgio','Pea']}/>
                <BookSearchComponent />
            </div>

        )
    }
}
export default CollectionComponent;