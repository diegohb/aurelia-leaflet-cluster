import * as $ from "jquery";
import { Map, MapOptions, LatLng, tileLayer, LatLngExpression, LatLngLiteral, Icon, control, Layer } from "leaflet";
import { GeographicExtent } from './model/GeographicExtent';
import { GeoCoordinate } from "./model/GeoCoordinate";

export class App {
  private _map: Map;

  message = 'Hello World!';
  mapBounds: string = "";

  constructor() {

  }

  public async attached(): Promise<any> {
    $("p#jquery").text("jquery loaded!")

    let elMap: HTMLElement = document.getElementById("leafmap");

    if (!elMap) {
      return Promise.reject("Map container element expected by ID 'leafmap'.");
    }

    let mapOptions: MapOptions = {
      minZoom: 9,
      maxZoom: 18,
      zoomControl: false
    };

    let newMap = new Map(elMap, mapOptions);

    this._map = await this.initializeMap(newMap, mapOptions.maxZoom);
    this._map.on("moveend", this.onMapMoveEnd);
    this.onMapMoveEnd(null, null);

    return Promise.resolve(this._map);
  }

  private async onMapMoveEnd(arg0: any, arg1: any): Promise<any> {
    let geoExtent:GeographicExtent = await this.getMapExtentBounds(this._map);
    this.mapBounds = geoExtent.toHTML();
    return Promise.resolve();
  }

  private async initializeMap(pLeafletMap: Map, pMaxZoom: number): Promise<any> {

    addZoomControls(pLeafletMap);

    let centerCoordinates: LatLng | LatLngLiteral = new LatLng(38.883, -76.9947);
    pLeafletMap.setView(centerCoordinates, 16);

    let baseLayer =
      tileLayer(
        "https://api.mapbox.com/styles/v1/compsagnathus/cj4rhzsvw2xb82sn12xvq12fq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29tcHNhZ25hdGh1cyIsImEiOiJjajRyZ3ZpbzUwazJhMzRqcmxhZmpsd281In0.gDi4uI4dBfOxHJWedZnkXQ",
        {
          maxZoom: pMaxZoom,
          attribution:
          "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a>" +
          "© <a href='http://www.openstreetmap.org/copyright'> OpenStreetMap </a> " +
          "<strong> <a href='https://www.mapbox.com/feedback/' target='_blank'> Improve this map </a></strong >",
          id: "wmflabs.streets.bw"
        });

    baseLayer.addTo(pLeafletMap);
    return pLeafletMap;

    function addZoomControls(pMap: Map): void {
      let zoomControl = control.zoom({ position: "topleft" });
      pMap.addControl(zoomControl);
    }
  }

  private async getMapExtentBounds(pMap: Map): Promise<GeographicExtent> {
    let mapBounds = pMap.getBounds();

    let boundTop: GeoCoordinate = new GeoCoordinate(mapBounds.getNorthWest().lng, mapBounds.getNorthWest().lat);
    let boundBottomRight: GeoCoordinate = new GeoCoordinate(mapBounds.getSouthEast().lng, mapBounds.getSouthEast().lat);

    let bounds: GeographicExtent = new GeographicExtent(boundTop, boundBottomRight);
    return Promise.resolve(bounds);
  }
}

