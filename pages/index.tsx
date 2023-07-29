import Grid from '@mui/material/Grid'
import ContestCard from '@/components/contest_card'
import BodyFit from '@/components/body_fit'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'
import CustomAppbar from '@/components/custom_appbar'
import { Typography, Box, Tabs, Tab } from '@mui/material'
import CustomTabPanel from '@/components/custom_tab_panel'
import React, {useState} from 'react'

const rightBorder = {borderRight: '1px solid #ccc'}


function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function HomePage(){
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const bottomTabs = (
        <BodyFit>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Matches" {...a11yProps(0)} />
                    <Tab label="News" {...a11yProps(1)} />
                    <Tab label="Bracket" {...a11yProps(2)} />
                    <Tab label="Stats" {...a11yProps(3)} />
                    <Tab label="Contestants" {...a11yProps(4)} />
                </Tabs>
            </Box>
        </BodyFit>
    );

    const router = useRouter()
    const tDawg = [1,2,3,4,5].map((e,i)=> (
        <>
            {i % 2 == 0 && <Divider orientation="horizontal" flexItem style={{ width: '100%' }} />}
            <Grid item md={6} xs={12} style={i % 2 == 0 ? rightBorder : {}}>
                <ContestCard onTap={()=> router.push('/contest')} isLive={false}/>
            </Grid>
        </>
    ))
    return (
        <>
            <CustomAppbar showTabs={true} bottom={bottomTabs}/>
            <BodyFit>
                <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={0}>
                        {tDawg}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Some news about contest here
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    A bracket of the competition from  R16 to finals
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Item Four
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    Item Five
                </CustomTabPanel>
            </BodyFit>
        </>
    )
}