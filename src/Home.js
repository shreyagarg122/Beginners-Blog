// import {useState, useEffect} from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs,isPending,error}= useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs here" />}
        </div>
      );
}
 
export default Home;
