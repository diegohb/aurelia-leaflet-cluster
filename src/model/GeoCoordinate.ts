
export class GeoCoordinate {
    private readonly _latitude: number;
    private readonly _longitude: number;
    private readonly _altitude: number;

    constructor(pLatitude: number, pLongitude: number, pAltitude?: number) {
        this._latitude = pLatitude;
        this._longitude = pLongitude;
        if (pAltitude)
            this._altitude = pAltitude;
    }

    get Latitude(): number { return this._latitude; }

    get Longitude(): number { return this._longitude; }

    get Altitude(): number { return this._altitude; }

    public toString(): string {
        return `(${this.Latitude},${this.Longitude})`;
    }
}