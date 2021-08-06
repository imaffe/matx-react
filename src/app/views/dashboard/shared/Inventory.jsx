import React from 'react'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Paper,
    MenuItem,
    Select, Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ImageCard from "./ImageCard";
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

const Inventory = () => {
    const classes = useStyles()

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">物品栏</span>
                <Select size="small" defaultValue="outfits" disableUnderline>
                    <MenuItem value="consumable">消耗品</MenuItem>
                    <MenuItem value="books">书籍</MenuItem>
                    <MenuItem value="outfits">装备</MenuItem>
                    <MenuItem value="weapons">武器</MenuItem>
                    <MenuItem value="skills">技能书</MenuItem>
                    <MenuItem value="grocery">杂物</MenuItem>
                </Select>
            </div>
            <div className="flex justify-between items-center px-6 mb-3">
                <Grid container spacing={2} alignItems="center">
                    {/*<div className="overflow-auto">*/}

                    {/*</div>*/}
                    {productList.map((product, index) => (
                        <Grid item md={4}>
                            <ImageCard item={product}></ImageCard>
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
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'earphone',
        price: 1500,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'iPhone x',
        price: 1900,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/iphone-1.jpg',
        name: 'iPhone x',
        price: 100,
        available: 0,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'Head phone',
        price: 1190,
        available: 5,
    },
]

export default Inventory
