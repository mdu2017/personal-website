import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import proj1 from '../images/emoji_bot.PNG';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 200,
    backgroundColor: '#b1d2f0',
  },
});

const imageStyle = {
    imgStyle:{
        height: '100%',
        width: '100%',
    }
}

const Project = ({projectName, description}) => {
  const classes = useStyles();

  return (
      <div style={{paddingLeft: '20%'}}>
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Semester project 1"
        >
        <img src={proj1} component="img" style={imageStyle.imgStyle}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://github.com/mdu2017/emoji-stats-bot">
          View on GitHub
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Project