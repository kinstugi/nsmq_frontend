import Card from '@mui/material/Card'
import CardActionArea  from '@mui/material/CardActionArea'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import React, {ReactNode} from 'react'
import SchoolScore from './school_score'

type OnTapHandler = () => void;

interface ContestCardProps{  
    onTap: OnTapHandler
    isLive: boolean
}

const ContestCard:React.FC<ContestCardProps> = ({ onTap, isLive }) => {
    return (
        
        <Card elevation={0} style={{borderRadius: 0}}>
            <CardActionArea onClick={onTap}>
                <Grid container p={2} justifyContent={"space-between"}>
                    <Grid item xs={8}>
                        <SchoolScore name="Saint Augustines"/>
                        <SchoolScore name="Adisadel College"/>
                        <SchoolScore name="Mfantipim School" />
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item textAlign={'center'} xs={3}>
                        <h5>Thu, Aug3</h5>
                        <p>13:00</p>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
        
    )
}

ContestCard.defaultProps = {
    isLive : false
}

export default ContestCard