import { GeoCoordinate } from "../../src/model/GeoCoordinate";

describe('a GeoCoordinate object', () => {
    it("latitude is initialized correctly from ctor", () => {
        const lat = 125
        expect(new GeoCoordinate(lat, -60).Latitude).toBe(lat);
    });

    it("longitude is initialized correctly from ctor", () => {
        const lng = -75;
        expect(new GeoCoordinate(111, lng).Longitude).toBe(lng);
    });

    it("altitude is initialized correctly from ctor", () => {
        const alt = 100;
        expect(new GeoCoordinate(-158, -71, alt).Altitude).toBe(alt);
    });

    it("display name is formatted as (x,y)", () => {
        const lat = 125
        const lng = -75;
        const expectedDisplayName = `(${lat},${lng})`;
        expect(new GeoCoordinate(lat, lng).toString()).toBe(expectedDisplayName);
    });
});