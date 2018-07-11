export class Computer {
    private _processor: Processor

    constructor(_processor: Processor) {
        this._processor = _processor
    }
}

export class Processor {
    constructor(speed: number) { }
}