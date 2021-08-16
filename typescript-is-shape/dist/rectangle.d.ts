import { shape } from "./shape";
export declare class rectangle extends shape implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, _width: number, _height: number);
    area(): number;
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
}
