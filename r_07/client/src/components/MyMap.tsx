import React, {} from 'react';

require("openlayers/css/ol.css");

const ol = require('openlayers');

interface IMapProps {
    center:number[];
}

let map=null;

export function updateMap(center:number[]) {
    //map.getView().center = center;
    map.getView().setCenter(ol.proj.transform([center[1],center[0]], 'EPSG:4326', 'EPSG:3857'));
}


export class MyMap extends React.Component<IMapProps, void>  {
    render() {
        console.log("MyMap->render");
        return (
            <div id="map">
            </div>
        );
    }

    componentDidMount() {
        map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: this.props.center,
                zoom: 4
            })
        });
    }
};