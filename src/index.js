import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD7Z_tu0X_eHp4F5QWHr7V73vDCVIeNTyQ';

YTSearch({key: API_KEY, term:'block chain'},function(data){
    console.log(data);
});

// Create a new Component. That produce some HTML
const App = () => {
    return (<div>
        <SearchBar />
    </div>);    // JSX
}



// Take the component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));