import {
    adventureMapEl,
    adventureDetailsEl,
} from '../common.js';

import adventureData from '../data/adventureData.js';

import renderAdventureDetails from './AdventureDetails.js';

let map;
let infoWindows = [];

const initMap = async () => {
    const position = { lat: 39.8097343, lng: -98.5556199 };
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

    map = new Map(adventureMapEl, {
        zoom: 4,
        center: position,
        mapId: 'c95a1b32bd31296b',
        disableDefaultUI: true,
        clickableIcons: false,
    });

    adventureData.forEach((adventure) => {
        const icon = document.createElement('div');
        icon.innerHTML = '<i class="fa-solid fa-thumb-tack adventure-map__icon"></i>'
    
        const marker = new AdvancedMarkerElement({
            map: map,
            position: adventure.location,
            content: icon,
            title: adventure.title,
        });

        const infoWindowContent = document.createElement('div');
        infoWindowContent.innerHTML = `<div class='adventure-map__info-window'>${adventure.title}</div>`;

        const infoWindowBtn = document.createElement('button');
        infoWindowBtn.className = 'adventure-map__info-window__btn';
        infoWindowBtn.textContent = 'View Pictures';

        infoWindowBtn.addEventListener('click', () => {
            renderAdventureDetails(adventure);
        });

        infoWindowContent.appendChild(infoWindowBtn);

        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
            ariaLabel: adventure.title
        });

        infoWindows.push(infoWindow);

        marker.addListener('click', () => {
            infoWindows.forEach(window => {
                window.close();
            });
            infoWindow.open(map, marker);
        });
    });
};

initMap();