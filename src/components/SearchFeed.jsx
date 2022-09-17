import React from "react";
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from "./";
import {fetchFromAPI} from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() =>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm])

    return(
       <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
                Search Result for: <span style={{ color: '#5C7AFF' }}>{searchTerm}</span> Videos
            </Typography>

            {/* Rendering Videos */}
            <Videos videos={videos}/>
        </Box>
    )
}

export default SearchFeed;