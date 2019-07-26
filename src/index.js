import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/vdo_list';
import VideoDetail from './components/vdo_details';

const API_KEY = 'AIzaSyD7Z_tu0X_eHp4F5QWHr7V73vDCVIeNTyQ';


// Create a new Component. That produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVdo: null
        };

        this.vdoSearch('Coding Train');
    }

    vdoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVdo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.vdoSearch(term) }, 300);
        return (
            <div className="row">
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVdo} />
                <VideoList onVdoSelected={selectedVdo => this.setState({ selectedVdo })} videos={this.state.videos} />
            </div>
        );
    }
}



// Take the component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container-fluid'));