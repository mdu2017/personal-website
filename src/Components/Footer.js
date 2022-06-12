import React from 'react';
import {Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from '@material-ui/icons/GetApp';

const styles = {

    footerTopPadding: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    },
    centerIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
    },

    linkIcons: {
        fontSize: 75,
    },

    linkColor:{
        color: 'black'
    },

    // This is used to insert a new line in a flex layout
    breakWrap:{
      flexBasis: '100%',
      height: 0,
    }
}
// Brief footer with conclusion
const Footer = () => {
    return (
        <div style={styles.footerTopPadding}>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Thanks for reading the webpage. Feel free to visit my LinkedIn or GitHub page by clicking on the icons below.
            </Typography>
            
            <div style={styles.breakWrap}></div>

            <div style={styles.centerIcons}>
              {/* Links to github, LinkedIn, and paper publications */}
              <a style={styles.linkColor} href={'https://github.com/mdu2017'}><GitHubIcon style={styles.linkIcons}/></a>
              <a style={styles.linkColor} href={'https://www.linkedin.com/in/mark-t-du/'}><LinkedInIcon style={styles.linkIcons}/></a>
              {/* <a style={styles.linkColor} href={'./data/MarkDuResume.pdf'} download={true}><GetAppIcon style={styles.linkIcons}/></a> */}
              
            </div>
            
            <div style={styles.breakWrap}></div>

            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Email: mark_du1@baylor.edu
            </Typography>
        </div>
    )
}

export default Footer
