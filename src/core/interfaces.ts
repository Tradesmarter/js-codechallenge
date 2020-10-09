
export enum IBookSide {
    bid = 'bid',
    ask = 'ask'
}

export interface IBookItem {
    side: IBookSide,
    price: number;
    amount: number;
    total: number;
}

/**
 * OHLCV
 */
export interface ICandle {
    date: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}