import React from 'react'
import Project from './Project'
import {Typography} from '@material-ui/core'

const styles = {
    projectHeading: {
        padding: '50px'
    }
}

// This component will have all the major body paragraphs and explanations
const Content = () => {
    return(
        <div>
            <div style={styles.projectHeading}>
                <Typography variant="h3" align="center" color="textSecondary" paragraph>
                    Here are some of my projects
                </Typography>
            </div>

            <Project projectName='P1' description='Semester project'/>

            {/* <Project title='Project1...' date='Fall 2019' image='fill' description='This is abc'/>
            <Project title='Project2...' date='Summer 2020' description='Summer 2020'/>
            <Project title='Project3...' date='Winter 2020' description='Research project'/> */}

        </div>
    )
}

export default Content