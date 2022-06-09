import React from 'react'
import Project from './Project'
import Experience from './Experience'
import {Typography} from '@material-ui/core'
import { InfoOutlined } from '@material-ui/icons'

import scProj from '../images/sc_project.PNG'
import emojiProj from '../images/emoji_bot.PNG'
import hackathonProj from '../images/hackathon_project.png'
import Publication from './Publication'
import mappingStudy from '../images/mapping_study.PNG'
import logAnalysis from '../images/log_analysis.PNG'

const styles = {
    projectHeading: {
        padding: '50px'
    },

    projectCards: {
        paddingLeft: '20%',
        paddingRight: '20%',
        display: 'flex',
        justifyContent: 'center',
    }
}

// This component will have all the major body paragraphs and explanations
const Content = () => {
    return(
        <div>
            <div style={styles.projectHeading}>
                <Typography variant="h3" align="center" color="textPrimary" paragraph>
                    Here are some of my projects
                </Typography>
            </div>

            <div className='project-card' style={styles.projectCards}>
                <Project projectName='Finance Tracker App' 
                    description='Spring 2021 Hackathon Project - Application that helps users keep track on spending. Built using the Capitol One Nessie API along with React'
                    imageSrc={hackathonProj}
                    githubURL='https://github.com/mdu2017/hack-utd-project'/>

                <Project projectName='Emoji Statistics Bot' 
                    description='Discord bot that analyzes emoji usage within a discord server'
                    imageSrc={emojiProj}
                    githubURL='https://github.com/mdu2017/emoji-stats-bot'/>

                <Project projectName='Starcraft Unit Damage Charts' 
                    description='Streamlit project that provides visualizations and charts for unit damages in Starcraft: Brood War.'
                    imageSrc={scProj}
                    githubURL='https://github.com/mdu2017/6pool'/>
            </div>

            <br/> <br/>

            {/* Experience section */}
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Here is a list of technologies and skills I have worked with
            </Typography>

            <Experience/>

            {/* List of Publications */}
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Here is a list of papers and publications that I have co-authored
            </Typography>
            
            <div className='project-card' style={styles.projectCards}>
              <Publication paperTitle="On Matching Log Analysis to Source Code: A Systematic Mapping Study" 
                description="A Mapping Study article related to topics of matching log analysis to source code." 
                articleURL="https://dl.acm.org/doi/10.1145/3400286.3418262" 
                imageSrc={mappingStudy}/>
                
              <Publication paperTitle="On Log Analysis and Stack Trace Use to Improve Program Slicing" 
                description="Research article discussing topics of log analysis and stack trace usage to improve program slicing." 
                articleURL="https://link.springer.com/chapter/10.1007/978-981-33-6385-4_25" 
                imageSrc={logAnalysis}/>
            </div>

        </div>
    )
}

export default Content