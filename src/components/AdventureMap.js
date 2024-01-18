import {
    adventureMapEl,
} from '../common.js';

import adventureData from '../data/adventureData.js';
import renderAdventureDetails from './AdventureDetails.js';

const initMap = async () => {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

    // Const for storing info windows so they can be closed.
    const infoWindows = [];

    // Map centered on the United States
    const map = new Map(adventureMapEl, {
        zoom: 3,
        center: { lat: 39.8097343, lng: -98.5556199 },
        mapId: 'c95a1b32bd31296b',
        disableDefaultUI: true,
        clickableIcons: false,
    });

    // Create markers and info windows for each adventure
    adventureData.forEach(adventure => {
        const marker = createMarker(AdvancedMarkerElement, map, adventure);
        const infoWindow = createInfoWindow(adventure);

        infoWindows.push(infoWindow);

        marker.addListener('click', () => {
            closeInfoWindows(infoWindows);
            infoWindow.open(map, marker);
        });
    });

    // Close info windows if map is clicked or dragged
    ['click', 'drag'].forEach(event => {
        map.addListener(event, () => closeInfoWindows(infoWindows));
    });
};

const createMarker = (AdvancedMarkerElement, map, adventure) => {
    // Create DOM element for marker
    const icon = document.createElement('div');
    icon.innerHTML = '<i class="fa-solid fa-thumb-tack adventure-map__icon"></i>';

    return new AdvancedMarkerElement({  
        map: map,
        position: adventure.location,
        content: icon,
        title: adventure.title,
    });
};

const createInfoWindow = (adventure) => {
    // Info window parent element
    const infoWindowContent = document.createElement('div');
    infoWindowContent.className = 'adventure-map__info-window';

    // Info window title element
    infoWindowContent.innerHTML = `<h3 class='adventure-map__info-window__title'>${adventure.title}</h3>`;

    // Info window button element
    const infoWindowBtn = document.createElement('button');
    infoWindowBtn.className = 'adventure-map__info-window__btn';
    infoWindowBtn.textContent = 'View Details';

    infoWindowBtn.addEventListener('click', () => renderAdventureDetails(adventure));

    infoWindowContent.appendChild(infoWindowBtn);

    return new google.maps.InfoWindow({
        content: infoWindowContent,
        ariaLabel: adventure.title
    });
};

const closeInfoWindows = infoWindows => {
    infoWindows.forEach(window => window.close());
};

initMap();