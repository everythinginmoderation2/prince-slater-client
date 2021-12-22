import React from 'react'
import './HomePage.css'
import HomeHeader from '../Components/HomeHeader/HomeHeader'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="root">
            <Grid container spacing={1} className='grid--container'>
                {/* Header */}
                <Grid className='grid--nested' item xs={12}>
                    <HomeHeader className='header' />
                </Grid>
                {/* Accordion and Audio */}
                <Grid className='grid--nested left' item xs={6} sm={6}>
                    
                </Grid>
                <Grid className='grid--nested right' item xs={12} sm={6}>
                </Grid>
                <Grid className='grid--nested' item xs={12}>
                    <Paper className='footer'><Footer /></Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage

