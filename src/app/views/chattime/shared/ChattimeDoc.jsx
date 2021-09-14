import {Card, Grid, MenuItem, Select} from "@material-ui/core";
import ImageCard from "./ChattimeDocCard";
import {Pagination} from "@material-ui/lab";
import React from "react";
import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const ChattimeDoc = () => {
  const classes = useStyles()
  const { docId } = useParams()
  return (
    <Card elevation={3} className="pt-5 mb-6">
      <div className="flex justify-between items-center px-6 mb-3">
        <Grid container spacing={2} alignItems="center">
          <div>{docId}</div>
        </Grid>
      </div>
      <div className="flex justify-center items-center px-6 mb-3">
        <Pagination count={10} size="small" />
      </div>

    </Card>
  )
}

export default ChattimeDoc