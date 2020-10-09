import { Paper } from '@material-ui/core'
import React from 'react'
import { ICandle } from '../core/interfaces'

interface IChartProps {
    candles: ICandle[];
}

/**
 * Implement Candle chart here
 */
export default function Chart(props: IChartProps) {
    return (
        <Paper>
            <ul>
                {props.candles.map((candle: ICandle) => (<li key={candle.date}>{candle.open}</li>))}
            </ul>
        </Paper>
    )
}
