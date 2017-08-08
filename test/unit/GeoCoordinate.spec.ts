import { GeoCoordinate } from "../../src/model/GeoCoordinate";

describe('a GeoCoordinate object', () => {
  it("display name is formatted as (x,y)", () => {
    const lat = 125
    const lng = -75;
    const expectedDisplayName = `(${lat},${lng})`;
    expect(new GeoCoordinate(lat, lng).toString()).toBe(expectedDisplayName);
  });
});