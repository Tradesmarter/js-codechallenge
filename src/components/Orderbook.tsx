import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { IBookItem, IBookSide } from '../core/interfaces'

interface IOrderBookProps {
    side: IBookSide;
    items: IBookItem[];
}

const Orderbook = (props: IOrderBookProps) =>
    (<TableContainer component={Paper}>
        <Table aria-label="Asks">
            <TableHead>
                <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.items.map((row: IBookItem) => (
                    <TableRow key={row.price}>
                        <TableCell component="th" scope="row">
                            {row.price}
                        </TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)


export default Orderbook;