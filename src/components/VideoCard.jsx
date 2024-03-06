import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants'

const VideoCard = ({ video: { id: {videoId }, snippet } }) => {
    
  return (
    <Card sx={{ width : { md: '320px', xs:'100%'}, boxShadow:'none', borderRadius:0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <CardMedia 
              image={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx = {{ width:358, height:180  }}
            />
        </Link>

        <CardContent
          sx={{backgroundColor:'#1e1e1e', height:'106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                <Typography variant='subtitle1' color='#fff' fontWeight='bold'>
                    {snippet?.title.slice(0,60) || snippet?.demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography variant='subtitle1' color='#fff' fontWeight='bold' display='flex' alignItems='center'>
                    {snippet?.channelTitle.slice(0,60) || snippet?.demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{fontSize: '22px', color:'gray',ml: '5px'}} ></CheckCircle>
                </Typography>
            </Link>


          </CardContent>
    </Card>
  )
}

export default VideoCard