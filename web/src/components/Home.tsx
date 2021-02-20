import React from 'react';
import NavigationBar from './NavigationBar';
import SearchBox from './SearchBox';

function Home() {
    
    return (
        <div className="container">
            <NavigationBar></NavigationBar>
            

            <SearchBox></SearchBox>

        </div>
    )
}


export default Home