import React from 'react';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

class BookSearchComponent extends React.Component{

    attachObservable(ref){
        var obs = Observable.fromEvent(ref,'keyup');
        obs.subscribe((value)=>{
            console.log(value.target.value);
        })
    }

    render(){
        return(
            <input type="text" ref={(ref)=>{this.attachObservable(ref)}}/>
        )
    }

}
export default BookSearchComponent;