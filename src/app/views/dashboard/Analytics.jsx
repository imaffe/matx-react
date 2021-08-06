import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'
import SkillPoints from "./shared/SkillPoints";
import Inventory from "./shared/Inventory";
import DailyTracker from "./shared/DailyTracker";
import ImageCard from "./shared/ImageCard";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {MatxProgressBar} from "../../components";


const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const Analytics = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Affe</div>
                            <div className="card-subtitle">D级人员</div>
                            <div className="analytics m-sm-30 mt-6">
                                <CardMedia
                                    className={classes.media}
                                    image="assets/images/avatars/004-bald.svg"
                                    title="Avatar"
                                />
                            </div>
                            <small className="text-gray">等级</small>
                            <div className="pt-1" />
                                <MatxProgressBar
                                    value={75}
                                    color="secondary"
                                    text="Lv 1 (3/5)"
                                />
                            <div className="py-1" />
                        </Card>

                        {/*<Card />*/}
                        {/*<Card />*/}
                        <SkillPoints />

                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        {/*<StatCards />*/}

                        {/* Top Selling Products */}
                        <Inventory />

                        {/*<StatCards2 />*/}

                        <DailyTracker />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
