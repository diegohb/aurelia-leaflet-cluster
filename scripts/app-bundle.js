var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app',["require", "exports", "jquery", "leaflet", "./model/GeographicExtent", "./model/GeoCoordinate", "bootstrap-material-design"], function (require, exports, $, leaflet_1, GeographicExtent_1, GeoCoordinate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
            this.mapExtent = null;
        }
        App.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var elMap, mapOptions, newMap, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            $("p#jquery").text("jquery loaded!");
                            elMap = document.getElementById("leafmap");
                            if (!elMap) {
                                return [2, Promise.reject("Map container element expected by ID 'leafmap'.")];
                            }
                            mapOptions = {
                                minZoom: 9,
                                maxZoom: 18,
                                zoomControl: false
                            };
                            newMap = new leaflet_1.Map(elMap, mapOptions);
                            _a = this;
                            return [4, this.initializeMap(newMap, mapOptions.maxZoom)];
                        case 1:
                            _a._map = _c.sent();
                            this._map.on("moveend", function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = this;
                                            return [4, App.getMapExtentBounds(this._map)];
                                        case 1:
                                            _a.mapExtent = _b.sent();
                                            return [2];
                                    }
                                });
                            }); });
                            _b = this;
                            return [4, App.getMapExtentBounds(this._map)];
                        case 2:
                            _b.mapExtent = _c.sent();
                            $.material.init();
                            return [2, Promise.resolve(this._map)];
                    }
                });
            });
        };
        App.prototype.initializeMap = function (pLeafletMap, pMaxZoom) {
            return __awaiter(this, void 0, void 0, function () {
                function addZoomControls(pMap) {
                    var zoomControl = leaflet_1.control.zoom({ position: "topleft" });
                    pMap.addControl(zoomControl);
                }
                var centerCoordinates, baseLayer;
                return __generator(this, function (_a) {
                    addZoomControls(pLeafletMap);
                    centerCoordinates = new leaflet_1.LatLng(38.883, -76.9947);
                    pLeafletMap.setView(centerCoordinates, 16);
                    baseLayer = leaflet_1.tileLayer("https://api.mapbox.com/styles/v1/compsagnathus/cj4rhzsvw2xb82sn12xvq12fq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29tcHNhZ25hdGh1cyIsImEiOiJjajRyZ3ZpbzUwazJhMzRqcmxhZmpsd281In0.gDi4uI4dBfOxHJWedZnkXQ", {
                        maxZoom: pMaxZoom,
                        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a>" +
                            "© <a href='http://www.openstreetmap.org/copyright'> OpenStreetMap </a> " +
                            "<strong> <a href='https://www.mapbox.com/feedback/' target='_blank'> Improve this map </a></strong >",
                        id: "wmflabs.streets.bw"
                    });
                    baseLayer.addTo(pLeafletMap);
                    return [2, pLeafletMap];
                });
            });
        };
        App.getMapExtentBounds = function (pMap) {
            return __awaiter(this, void 0, void 0, function () {
                var mapBounds, boundTop, boundBottomRight, bounds;
                return __generator(this, function (_a) {
                    if (!pMap)
                        throw "getMapExtentBounds: pMap is null!";
                    mapBounds = pMap.getBounds();
                    boundTop = new GeoCoordinate_1.GeoCoordinate(mapBounds.getNorthWest().lng, mapBounds.getNorthWest().lat);
                    boundBottomRight = new GeoCoordinate_1.GeoCoordinate(mapBounds.getSouthEast().lng, mapBounds.getSouthEast().lat);
                    bounds = new GeographicExtent_1.GeographicExtent(boundTop, boundBottomRight);
                    return [2, Promise.resolve(bounds)];
                });
            });
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUU3QixRQUFRLEdBQWtCLElBQUksNkJBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEcsZ0JBQWdCLEdBQWtCLElBQUksNkJBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFaEgsTUFBTSxHQUFxQixJQUFJLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRixXQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7OztTQUNoQztRQUNILFVBQUM7SUFBRCxDQTlFQSxBQThFQyxJQUFBO0lBOUVZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgTWFwLCBNYXBPcHRpb25zLCBMYXRMbmcsIHRpbGVMYXllciwgTGF0TG5nRXhwcmVzc2lvbiwgTGF0TG5nTGl0ZXJhbCwgSWNvbiwgY29udHJvbCwgTGF5ZXIgfSBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IHsgR2VvZ3JhcGhpY0V4dGVudCB9IGZyb20gJy4vbW9kZWwvR2VvZ3JhcGhpY0V4dGVudCc7XG5pbXBvcnQgeyBHZW9Db29yZGluYXRlIH0gZnJvbSBcIi4vbW9kZWwvR2VvQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IHsgYmluZGFibGUsIGJpbmRpbmdNb2RlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IFwiYm9vdHN0cmFwLW1hdGVyaWFsLWRlc2lnblwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwcml2YXRlIF9tYXA6IE1hcDtcbiAgbWVzc2FnZSA9ICdIZWxsbyBXb3JsZCEnO1xuXG4gIG1hcEV4dGVudDogR2VvZ3JhcGhpY0V4dGVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYXR0YWNoZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAkKFwicCNqcXVlcnlcIikudGV4dChcImpxdWVyeSBsb2FkZWQhXCIpXG5cbiAgICBsZXQgZWxNYXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWFmbWFwXCIpO1xuXG4gICAgaWYgKCFlbE1hcCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTWFwIGNvbnRhaW5lciBlbGVtZW50IGV4cGVjdGVkIGJ5IElEICdsZWFmbWFwJy5cIik7XG4gICAgfVxuXG4gICAgbGV0IG1hcE9wdGlvbnM6IE1hcE9wdGlvbnMgPSB7XG4gICAgICBtaW5ab29tOiA5LFxuICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICB6b29tQ29udHJvbDogZmFsc2VcbiAgICB9O1xuXG4gICAgbGV0IG5ld01hcCA9IG5ldyBNYXAoZWxNYXAsIG1hcE9wdGlvbnMpO1xuXG4gICAgdGhpcy5fbWFwID0gYXdhaXQgdGhpcy5pbml0aWFsaXplTWFwKG5ld01hcCwgbWFwT3B0aW9ucy5tYXhab29tKTtcbiAgICB0aGlzLl9tYXAub24oXCJtb3ZlZW5kXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMubWFwRXh0ZW50ID0gYXdhaXQgQXBwLmdldE1hcEV4dGVudEJvdW5kcyh0aGlzLl9tYXApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYXBFeHRlbnQgPSBhd2FpdCBBcHAuZ2V0TWFwRXh0ZW50Qm91bmRzKHRoaXMuX21hcCk7XG5cbiAgICAkLm1hdGVyaWFsLmluaXQoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbWFwKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdGlhbGl6ZU1hcChwTGVhZmxldE1hcDogTWFwLCBwTWF4Wm9vbTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcblxuICAgIGFkZFpvb21Db250cm9scyhwTGVhZmxldE1hcCk7XG5cbiAgICBsZXQgY2VudGVyQ29vcmRpbmF0ZXM6IExhdExuZyB8IExhdExuZ0xpdGVyYWwgPSBuZXcgTGF0TG5nKDM4Ljg4MywgLTc2Ljk5NDcpO1xuICAgIHBMZWFmbGV0TWFwLnNldFZpZXcoY2VudGVyQ29vcmRpbmF0ZXMsIDE2KTtcblxuICAgIGxldCBiYXNlTGF5ZXIgPVxuICAgICAgdGlsZUxheWVyKFxuICAgICAgICBcImh0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL2NvbXBzYWduYXRodXMvY2o0cmh6c3Z3MnhiODJzbjEyeHZxMTJmcS90aWxlcy8yNTYve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pWTI5dGNITmhaMjVoZEdoMWN5SXNJbUVpT2lKamFqUnlaM1pwYnpVd2F6SmhNelJxY214aFptcHNkMjgxSW4wLmdEaTR1STRkQmZPeEhKV2VkWm5rWFFcIixcbiAgICAgICAge1xuICAgICAgICAgIG1heFpvb206IHBNYXhab29tLFxuICAgICAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAgIFwiwqkgPGEgaHJlZj0naHR0cHM6Ly93d3cubWFwYm94LmNvbS9hYm91dC9tYXBzLyc+TWFwYm94PC9hPlwiICtcbiAgICAgICAgICBcIsKpIDxhIGhyZWY9J2h0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0Jz4gT3BlblN0cmVldE1hcCA8L2E+IFwiICtcbiAgICAgICAgICBcIjxzdHJvbmc+IDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm1hcGJveC5jb20vZmVlZGJhY2svJyB0YXJnZXQ9J19ibGFuayc+IEltcHJvdmUgdGhpcyBtYXAgPC9hPjwvc3Ryb25nID5cIixcbiAgICAgICAgICBpZDogXCJ3bWZsYWJzLnN0cmVldHMuYndcIlxuICAgICAgICB9KTtcblxuICAgIGJhc2VMYXllci5hZGRUbyhwTGVhZmxldE1hcCk7XG4gICAgcmV0dXJuIHBMZWFmbGV0TWFwO1xuXG4gICAgZnVuY3Rpb24gYWRkWm9vbUNvbnRyb2xzKHBNYXA6IE1hcCk6IHZvaWQge1xuICAgICAgbGV0IHpvb21Db250cm9sID0gY29udHJvbC56b29tKHsgcG9zaXRpb246IFwidG9wbGVmdFwiIH0pO1xuICAgICAgcE1hcC5hZGRDb250cm9sKHpvb21Db250cm9sKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRNYXBFeHRlbnRCb3VuZHMocE1hcDogTWFwKTogUHJvbWlzZTxHZW9ncmFwaGljRXh0ZW50PiB7XG4gICAgaWYgKCFwTWFwKVxuICAgICAgdGhyb3cgXCJnZXRNYXBFeHRlbnRCb3VuZHM6IHBNYXAgaXMgbnVsbCFcIlxuXG4gICAgbGV0IG1hcEJvdW5kcyA9IHBNYXAuZ2V0Qm91bmRzKCk7XG5cbiAgICBsZXQgYm91bmRUb3A6IEdlb0Nvb3JkaW5hdGUgPSBuZXcgR2VvQ29vcmRpbmF0ZShtYXBCb3VuZHMuZ2V0Tm9ydGhXZXN0KCkubG5nLCBtYXBCb3VuZHMuZ2V0Tm9ydGhXZXN0KCkubGF0KTtcbiAgICBsZXQgYm91bmRCb3R0b21SaWdodDogR2VvQ29vcmRpbmF0ZSA9IG5ldyBHZW9Db29yZGluYXRlKG1hcEJvdW5kcy5nZXRTb3V0aEVhc3QoKS5sbmcsIG1hcEJvdW5kcy5nZXRTb3V0aEVhc3QoKS5sYXQpO1xuXG4gICAgbGV0IGJvdW5kczogR2VvZ3JhcGhpY0V4dGVudCA9IG5ldyBHZW9ncmFwaGljRXh0ZW50KGJvdW5kVG9wLCBib3VuZEJvdHRvbVJpZ2h0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGJvdW5kcyk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature("resources")
            .plugin("aurelia-bootstrap");
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWZELDhCQWVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZShcInJlc291cmNlc1wiKVxuICAgIC5wbHVnaW4oXCJhdXJlbGlhLWJvb3RzdHJhcFwiKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('model/GeoCoordinate',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GeoCoordinate = (function () {
        function GeoCoordinate(pLatitude, pLongitude, pAltitude) {
            this._latitude = pLatitude;
            this._longitude = pLongitude;
            if (pAltitude)
                this._altitude = pAltitude;
        }
        Object.defineProperty(GeoCoordinate.prototype, "Latitude", {
            get: function () { return this._latitude; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeoCoordinate.prototype, "Longitude", {
            get: function () { return this._longitude; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeoCoordinate.prototype, "Altitude", {
            get: function () { return this._altitude; },
            enumerable: true,
            configurable: true
        });
        GeoCoordinate.prototype.toString = function () {
            return "(" + this.Latitude + "," + this.Longitude + ")";
        };
        return GeoCoordinate;
    }());
    exports.GeoCoordinate = GeoCoordinate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL0dlb0Nvb3JkaW5hdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFLSSx1QkFBWSxTQUFpQixFQUFFLFVBQWtCLEVBQUUsU0FBa0I7WUFDakUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ25DLENBQUM7UUFFRCxzQkFBSSxtQ0FBUTtpQkFBWixjQUF5QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBRWpELHNCQUFJLG9DQUFTO2lCQUFiLGNBQTBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFFbkQsc0JBQUksbUNBQVE7aUJBQVosY0FBeUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUUxQyxnQ0FBUSxHQUFmO1lBQ0ksTUFBTSxDQUFDLE1BQUksSUFBSSxDQUFDLFFBQVEsU0FBSSxJQUFJLENBQUMsU0FBUyxNQUFHLENBQUM7UUFDbEQsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtJQXJCWSxzQ0FBYSIsImZpbGUiOiJtb2RlbC9HZW9Db29yZGluYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBHZW9Db29yZGluYXRlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sb25naXR1ZGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2FsdGl0dWRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocExhdGl0dWRlOiBudW1iZXIsIHBMb25naXR1ZGU6IG51bWJlciwgcEFsdGl0dWRlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGF0aXR1ZGUgPSBwTGF0aXR1ZGU7XHJcbiAgICAgICAgdGhpcy5fbG9uZ2l0dWRlID0gcExvbmdpdHVkZTtcclxuICAgICAgICBpZiAocEFsdGl0dWRlKVxyXG4gICAgICAgICAgICB0aGlzLl9hbHRpdHVkZSA9IHBBbHRpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGF0aXR1ZGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2xhdGl0dWRlOyB9XHJcblxyXG4gICAgZ2V0IExvbmdpdHVkZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbG9uZ2l0dWRlOyB9XHJcblxyXG4gICAgZ2V0IEFsdGl0dWRlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9hbHRpdHVkZTsgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy5MYXRpdHVkZX0sJHt0aGlzLkxvbmdpdHVkZX0pYDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('model/GeographicExtent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GeographicExtent = (function () {
        function GeographicExtent(pTopLeft, pBottomRight) {
            this._topLeft = pTopLeft;
            this._bottomRight = pBottomRight;
        }
        Object.defineProperty(GeographicExtent.prototype, "TopLeft", {
            get: function () {
                return this._topLeft;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographicExtent.prototype, "BottomRight", {
            get: function () {
                return this._bottomRight;
            },
            enumerable: true,
            configurable: true
        });
        GeographicExtent.prototype.ToPivotalApiObject = function () {
            return {
                TopLeft: this.TopLeft.toString(),
                BottomRight: this.BottomRight.toString()
            };
        };
        GeographicExtent.prototype.toHTML = function () {
            return "TopLeft: " + this.TopLeft.toString() + "<br />BottomRight: " + this.BottomRight.toString() + "]";
        };
        return GeographicExtent;
    }());
    exports.GeographicExtent = GeographicExtent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL0dlb2dyYXBoaWNFeHRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFJSSwwQkFBWSxRQUF1QixFQUFFLFlBQTJCO1lBRzVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7UUFFRCxzQkFBSSxxQ0FBTztpQkFBWDtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHlDQUFXO2lCQUFmO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUM7OztXQUFBO1FBRUcsNkNBQWtCLEdBQXpCO1lBQ08sTUFBTSxDQUFDO2dCQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDaEMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2FBQzNDLENBQUM7UUFDTixDQUFDO1FBRU0saUNBQU0sR0FBYjtZQUNJLE1BQU0sQ0FBQyxjQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLDJCQUFzQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFHLENBQUM7UUFDbkcsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtJQTdCWSw0Q0FBZ0IiLCJmaWxlIjoibW9kZWwvR2VvZ3JhcGhpY0V4dGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlb0Nvb3JkaW5hdGUgfSBmcm9tIFwiLi9HZW9Db29yZGluYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VvZ3JhcGhpY0V4dGVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90b3BMZWZ0OiBHZW9Db29yZGluYXRlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYm90dG9tUmlnaHQ6IEdlb0Nvb3JkaW5hdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocFRvcExlZnQ6IEdlb0Nvb3JkaW5hdGUsIHBCb3R0b21SaWdodDogR2VvQ29vcmRpbmF0ZSkge1xyXG4gICAgICAgIC8vVE9ETzogdmFsaWRhdGUgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IHBUb3BMZWZ0O1xyXG4gICAgICAgIHRoaXMuX2JvdHRvbVJpZ2h0ID0gcEJvdHRvbVJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUb3BMZWZ0KCk6IEdlb0Nvb3JkaW5hdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b3BMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCb3R0b21SaWdodCgpOiBHZW9Db29yZGluYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm90dG9tUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gcHVibGljIFRvUGl2b3RhbEFwaU9iamVjdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFRvcExlZnQ6IHRoaXMuVG9wTGVmdC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBCb3R0b21SaWdodDogdGhpcy5Cb3R0b21SaWdodC50b1N0cmluZygpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9IVE1MKCl7XHJcbiAgICAgICAgcmV0dXJuIGBUb3BMZWZ0OiAke3RoaXMuVG9wTGVmdC50b1N0cmluZygpfTxiciAvPkJvdHRvbVJpZ2h0OiAke3RoaXMuQm90dG9tUmlnaHQudG9TdHJpbmcoKX1dYDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('app.html!text', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"leaflet/leaflet.css\"></require><require from=\"bootstrap-material-design/dist/css/bootstrap-material-design.min.css\"></require><require from=\"bootstrap-material-design/dist/css/ripples.min.css\"></require><div class=\"container\"><h1>${message}</h1><div class=\"row\"><div class=\"col-md-9\"><div id=\"leafmap\" style=\"height:60vh\"></div></div><div class=\"col-md-3\" style=\"margin-top:1em\"><h2>Map Bounds</h2><div><span innerhtml.bind=\"mapExtent.toHTML()\"></span></div><button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Launch demo modal</button></div></div><div class=\"row\" style=\"margin-top:2em\"><div class=\"col-md-12\"><p id=\"jquery\"></p><div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4></div><div class=\"modal-body\">...</div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> <button type=\"button\" class=\"btn btn-primary\">Save changes</button></div></div></div></div></div></div></div></template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"bootstrap-material-design/dist/css/bootstrap-material-design.min.css\"></require><require from=\"bootstrap-material-design/dist/css/ripples.min.css\"></require><h1>${message}</h1>"; });
//# sourceMappingURL=app-bundle.js.map