import React from 'react';
import NavigationBar from './NavigationBar';
import SearchBox from './SearchBox';

function Home() {
    console.log(localStorage.getItem('username'))
    return (
        <div className="container">
            <NavigationBar username={ localStorage.getItem('username') }></NavigationBar>
            

            <SearchBox></SearchBox>

        </div>
    )
}


export default Home