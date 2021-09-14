import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import Inventory from "./shared/ChattimeDocMenu";
import {makeStyles} from "@material-ui/core/styles";
import ChattimeDocMenu from "./shared/ChattimeDocMenu";



const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const Chattime = () => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Fragment>
      <div className="analytics m-sm-30 mt-6">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <ChattimeDocMenu />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

export default Chattime
