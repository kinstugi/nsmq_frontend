import Grid from '@mui/material/Grid'
import React, {ReactNode} from 'react'

interface BodyFitProps {
    children: ReactNode
}

const BodyFit:React.FC<BodyFitProps> = ({children}) =>{ 
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={6}>
                {children}
            </Grid>
        </Grid>
    )
}

export default BodyFit