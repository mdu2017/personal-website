import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';

import mySQLIcon from '../images/mysql.png'
import pSQLIcon from '../images/postgresql.png'
import cppIcon from '../images/cplusplus.png'
import javaIcon from '../images/java.png'
import pythonIcon from '../images/python.png'
import reactIcon from '../images/react.png'
import rnativeIcon from '../images/react_native.png'
import htmlIcon from '../images/html5.png'
import cssIcon from '../images/css.png'
import jsIcon from '../images/javascript.png'
import bashIcon from '../images/bash.png'
import gitIcon from '../images/git.png'
import postmanIcon from '../images/postman.png'
import dockerIcon from '../images/docker.png'
import nodejsIcon from '../images/nodejs.png'
import discordpyIcon from '../images/discordpy.PNG'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: '3%',
      paddingBottom: '5%',
      paddingLeft: '20%',
      paddingRight: '20%',
    },
    paper: {
      height: '128px',
      width: '128px',
    },
    control: {
      padding: theme.spacing(3),
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    tooltipTextSize: {
        fontSize: '12px',
        color: '#ffffff',
    }
}));


// Holds list of icons for skills
const skillsList = [
    {name: 'MySQL', imgSrc: mySQLIcon},
    {name: 'PostgreSQL', imgSrc: pSQLIcon},
    {name: 'C++', imgSrc: cppIcon},
    {name: 'Java', imgSrc: javaIcon},
    {name: 'Python', imgSrc: pythonIcon},
    {name: 'React', imgSrc: reactIcon},
    {name: 'React-Native', imgSrc: rnativeIcon},
    {name: 'HTML 5', imgSrc: htmlIcon},
    {name: 'CSS', imgSrc: cssIcon},
    {name: 'JavaScript', imgSrc: jsIcon},
    {name: 'Bash', imgSrc: bashIcon},
    {name: 'Git', imgSrc: gitIcon},
    {name: 'Postman', imgSrc: postmanIcon},
    {name: 'Docker', imgSrc: dockerIcon},
    {name: 'node.js', imgSrc: nodejsIcon},
    {name: 'discord.py', imgSrc: discordpyIcon},
]

// Include links to paper/publications
const Experience = () => {

    
    const [spacing, setSpacing] = React.useState(3);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    // Create grid list of skills 
    const skillsMap = skillsList.map(skill => 
        <Tooltip title={<Typography variant="h6" className={classes.tooltipTextSize}>{skill.name}</Typography>}>
        <Grid key={skill.name} item>
          <Paper className={classes.paper}> 
              <img src={skill.imgSrc} className={classes.imageStyle}></img>
          </Paper>
        </Grid>
        </Tooltip>)

    return (
        <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          
            <Grid container justify="center" spacing={spacing}>
              {skillsMap}
            </Grid>
          
        </Grid>
    </Grid>
    );
}

export default Experience;