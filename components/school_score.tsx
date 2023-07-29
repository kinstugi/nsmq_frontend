import Grid from '@mui/material/Grid'
import School from '@mui/icons-material/School'
import React from 'react'

interface SchoolScoreProps{
    name: string
    score?: number
}

const SchoolScore:React.FC<SchoolScoreProps> = ({ name, score }) => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <School/>
            </Grid>
            <Grid item xs={9} pl={1} pt={1}>
                {name}
            </Grid>
            <Grid item xs={1} pt={1}>
                {score}
            </Grid>
        </Grid>
    );
}

export default SchoolScore