import React from "react";
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) =>{
    if(!Videos?.length) return "Loading...";
    // console.log(videos)
    return(
        <Stack direction={direction || "row"} flexWrap="wrap" style={{  width:  {xs: '100%', sm: '358px', md: '320px'} }} justifyContent="start" gap={2}>

            {videos.map((item, idx) => (
                <Box key={idx} sx={{width: {xs: "100%", md: "320px", sm: "358px"}}}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos;