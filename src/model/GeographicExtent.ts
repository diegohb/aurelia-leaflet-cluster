import { GeoCoordinate } from "./GeoCoordinate";

export class GeographicExtent {
    private readonly _topLeft: GeoCoordinate;
    private readonly _bottomRight: GeoCoordinate;

    constructor(pTopLeft: GeoCoordinate, pBottomRight: GeoCoordinate) {
        //TODO: validate            

        this._topLeft = pTopLeft;
        this._bottomRight = pBottomRight;
    }

    get TopLeft(): GeoCoordinate {
        return this._topLeft;
    }

    get BottomRight(): GeoCoordinate {
        return this._bottomRight;
    }

 public ToPivotalApiObject(): any {
        return {
            TopLeft: this.TopLeft.toString(),
            BottomRight: this.BottomRight.toString()
        };
    }

    public toHTML(){
        return `TopLeft: ${this.TopLeft.toString()}<br />BottomRight: ${this.BottomRight.toString()}]`;
    }
}