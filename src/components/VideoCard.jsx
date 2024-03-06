import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants'

const VideoCard = ({ video: { id: {videoId }, snippet }, position }) => {
    
  return (
    <Card sx={{ width : { xs:'100%',sm:'358px', md: '320px'}, boxShadow:'none', borderRadius:'8px', position:position }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <CardMedia 
              image={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx = {{ width:{
                xs:'100%', sm:'358px', md: '320px'
              }, height:160, }}
            />
        

        <CardContent className='video-card'
          sx={{backgroundColor:'black', height:'100px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                <Typography variant='subtitle1' color='#fff' fontWeight='bold'>
                    {snippet?.title.slice(0,55) || snippet?.demoVideoTitle.slice(0,45)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography className='channel-name' variant='subtitle1' color='#f1f1f1' display='flex' alignItems='center'>
                    {snippet?.channelTitle.slice(0,45) || snippet?.demoChannelTitle.slice(0,45)}
                    <CheckCircle sx={{fontSize: '22px', color:'gray',ml: '5px'}} ></CheckCircle>
                </Typography>
            </Link>


          </CardContent>
          </Link>
    </Card>
  )
}

export default VideoCard