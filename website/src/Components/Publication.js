import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: 400,
  },
  media: {
    height: 250,
  },
});

const imageStyle = {
    imgStyle:{
        height: '100%',
        width: '100%',
    },

    descriptionBox:{
      height: '100%',
    },

    cardPadding: {
        padding: 10,
    },

    cardBoxSize: {
      height: '100%',
    }
}

const Publication = ({paperTitle, description, imageSrc, articleURL}) => {
  const classes = useStyles();

  return (
      <div style={imageStyle.cardPadding}>
      <Card className={classes.root} variant="outlined" style={imageStyle.cardBoxSize}>
        <CardActionArea>

        {/* Image URL */}
        <CardMedia className={classes.media} title={paperTitle}>
          <img src={imageSrc} component="img" style={imageStyle.imgStyle}/>
        </CardMedia>

        {/* Project name and description */}
        <CardContent style={imageStyle.descriptionBox}>
          <Typography gutterBottom variant="h5" component="h2">
            {paperTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* Link to Github */}
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href={articleURL}>
          View Paper
        </Button>
      </CardActions>

    </Card>
    </div>
  );
}

export default Publication