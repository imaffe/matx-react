import React from 'react'
import {
    Card,
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChattimeDocCard from "./ChattimeDocCard";
import {Pagination} from "@material-ui/lab";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: palette.text.secondary,
    },
    root: {
        flexGrow: 1,
    },
}))

const ChattimeDocMenu = () => {
    const classes = useStyles()

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <Grid container spacing={2} alignItems="center">
                    {productList.map((product, index) => (
                        <Grid item md={4}>
                            <ChattimeDocCard item={product}></ChattimeDocCard>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="flex justify-center items-center px-6 mb-3">
                <Pagination count={10} size="small" />
            </div>

        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone',
        price: 100,
        available: 15,
        docId: 4,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'earphone',
        price: 1500,
        available: 30,
        docId: 5,
    },

]

export default ChattimeDocMenu
