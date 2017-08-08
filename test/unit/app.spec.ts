import { GeoCoordinate } from "../../src/model/GeoCoordinate";
import {App} from '../../src/app';

describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });
});

describe('a GeoCoordinate object', () => {
  it("display name is formatted as (x,y)", () => {
    const lat = 125
    const lng = -75;
    const expectedDisplayName = `(${lat},${lng})`;
    expect(new GeoCoordinate(lat, lng).toString()).toBe(expectedDisplayName);
  });
});
