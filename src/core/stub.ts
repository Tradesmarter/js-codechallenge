import { ICandle } from "./interfaces";

const randomSign = (): number => Math.random() > 0.5 ? -1 : 1;

const basisRandom = (input: number, factor: number): number =>
    Math.ceil(Math.random() / factor * input) * randomSign() + input

const generateRandomCandle = (): ICandle =>
    ({
        date: Number(new Date()),
        open: basisRandom(11987, 10),
        high: basisRandom(12003, 10),
        low: basisRandom(11945, 10),
        close: basisRandom(11968, 10),
        volume: basisRandom(2656, 10)
    })

export {
    randomSign,
    basisRandom,
    generateRandomCandle
}