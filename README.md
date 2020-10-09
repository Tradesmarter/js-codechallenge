# Paper trading
Goal of this test case is to figure out if candidate knows about common react patterns, redux, saga, typescript and able to figure performance bottlenecks.
Time estimation: less than 5 hours.


## Target solution
To pass this assignment you need your solution should pass requirements:
* React-redux as data layer, no data manipulation inside components unless it is necessary for performance.
* Typescript
    * Strictly typed: no *any* in components
* Orderbook
    * Use saga or redux thunk for fetching orderbook data
    * Create effective data transformations and optimizations
    * No timers inside components
* Charting
    * Feel free to pick any chart component or develop your own, but it should render updates every 500 ms.
    * Chart should contain no more than last 50 candles on screen, don't show all candles.
    * Chart could include candle volume indicator
* Layout
    * Change layout to looks close to image on scheme below ![schema][misc/schema.png]

### Before you start
* Create a fork of this project in your local github
* Install dependeciens and ensure that you can run this project locally
* Check App.tsx
    * Figure out how new candles are added
    * Uncomment timer to fetch orderbook data