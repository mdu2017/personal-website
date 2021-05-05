import React from 'react'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = {
  linkIcons: {
    fontSize: 75,
  },

  centerIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },

  linkColor:{
    color: 'black'
  }
}

// Contains the header (About Me and links to social media and pages)
const Header = ({author}) => {
    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {author}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hi there, I'm Mark. I graduated in 2021 from Baylor University with a degree in Computer Science and a minor in Mathematics.
            I am passionate about computer science and the ability to apply it in a variety of fields. From my experience both in and out of the classroom, I have had the
            opportunity to work on both personal projects and research projects. Below is a short list of some projects I have worked on.
            </Typography>
          
          <div style={styles.centerIcons}>
            {/* Links to github, LinkedIn, and paper publications */}
            <a style={styles.linkColor} href='https://github.com/mdu2017'><GitHubIcon style={styles.linkIcons}/></a>
            <a style={styles.linkColor} href='https://www.linkedin.com/in/mark-t-du/'><LinkedInIcon style={styles.linkIcons}/></a>
          </div>
        </div>
    )
}

export default Header;
