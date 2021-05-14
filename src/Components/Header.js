import React from 'react'
import Typography from '@material-ui/core/Typography'

const styles = {

  linkColor:{
    color: 'black'
  },

  headerText: {
    paddingLeft: '10%',
    paddingRight: '10%',
  }
}

// Contains the header (About Me and links to social media and pages)
const Header = ({author}) => {
    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {author}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={styles.headerText}>
            Hi there, I'm Mark. I graduated in 2021 from Baylor University with a degree in Computer Science and a minor in Mathematics.
            I am passionate about computer science and the software development process. From my experience both in and out of the classroom, I have had the
            opportunity to work on both personal projects and research projects. Below is a short list of some projects I have worked on.
            </Typography>
        </div>
    )
}

export default Header;
