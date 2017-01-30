import React, {} from 'react';

const ol = require('openlayers');

export const MyMap = () => {
    const map = new ol.Map({
        target: 'mymap',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: [949282, 6002552],
            zoom: 4
        })
    });
    return (
        <div id="map">
        </div>
    );
};