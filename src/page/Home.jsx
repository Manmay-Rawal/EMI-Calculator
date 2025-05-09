import React from 'react'
import Calculator from '../components/Calculator'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <Grid sx={{mt:4}}>
        <Calculator/>
    </Grid>
  )
}

export default Home