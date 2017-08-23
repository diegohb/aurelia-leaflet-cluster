import { autoinject } from "aurelia-dependency-injection";
import * as $ from "jquery";
import { Map, MapOptions, LatLng, tileLayer, LatLngExpression, LatLngLiteral, Icon, control, Layer } from "leaflet";
import { GeographicExtent } from './model/GeographicExtent';
import { GeoCoordinate } from "./model/GeoCoordinate";
import { bindable, bindingMode } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject()
export class App {
  private _map: Map;
  private _eventBus:EventAggregator;
  
  constructor(pEventBus:EventAggregator) {
    this._eventBus = pEventBus;
  }

  public message = 'Hello World!';

  public mapExtent: GeographicExtent = null;

  public leafletMapOptions: MapOptions = {
    minZoom: 9,
    maxZoom: 18,
    zoomControl: true,
    center: {
      lat: 38.883,
      lng: -76.9947
    }
  }
   public leafletLayers:any =
    {
      base: [
      {
        id: "wmflabs.streets.bw",
        url: "https://api.mapbox.com/styles/v1/compsagnathus/cj4rhzsvw2xb82sn12xvq12fq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29tcHNhZ25hdGh1cyIsImEiOiJjajRyZ3ZpbzUwazJhMzRqcmxhZmpsd281In0.gDi4uI4dBfOxHJWedZnkXQ",
        type: "tile",
        options: {
          maxZoom: 18,
          attribution:
          "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a>" +
          "© <a href='http://www.openstreetmap.org/copyright'> OpenStreetMap </a> " +
          "<strong> <a href='https://www.mapbox.com/feedback/' target='_blank'> Improve this map </a></strong >"
        }
      }
    ],
    overlay: []
  };

  public async attached(): Promise<any> {
    $("p#jquery").text("jquery loaded!")

    this._eventBus.subscribe("aurelia-leaflet", async (pData) => {
      console.log("aurelia-leaflet event", pData);

      if(pData.type == "moveend"){
        this.mapExtent = await App.getMapExtentBounds(pData.map);
      }
    });

    return Promise.resolve();
  }

  private static async getMapExtentBounds(pMap: Map): Promise<GeographicExtent> {
    if (!pMap)
      throw "getMapExtentBounds: pMap is null!"

    let mapBounds = pMap.getBounds();

    let boundTop: GeoCoordinate = new GeoCoordinate(mapBounds.getNorthWest().lng, mapBounds.getNorthWest().lat);
    let boundBottomRight: GeoCoordinate = new GeoCoordinate(mapBounds.getSouthEast().lng, mapBounds.getSouthEast().lat);

    let bounds: GeographicExtent = new GeographicExtent(boundTop, boundBottomRight);
    return Promise.resolve(bounds);
  }
}

