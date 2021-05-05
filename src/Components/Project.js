import { Typography } from '@material-ui/core'
import React from 'react'

const Project = ({title, date, image, description}) => {
    return (
        <div>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {title}
            </Typography>
        </div>
    )
}

export default Project