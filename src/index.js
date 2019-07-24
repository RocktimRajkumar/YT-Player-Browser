import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD7Z_tu0X_eHp4F5QWHr7V73vDCVIeNTyQ';


// Create a new Component. That produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'block chain' }, (data) => {
            this.setState({ videos: data });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}



// Take the component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));