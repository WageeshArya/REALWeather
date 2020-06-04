import React from 'react';
import Search from '../layout/Search';
import Results from '../layout/Results';
import ClearBtn from '../layout/ClearBtn';

export const Home = () => {
    return (
        <div>
            <Search />
            <Results />
            <ClearBtn />
        </div>
    )
}

export default Home;
