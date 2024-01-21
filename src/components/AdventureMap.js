import {
    adventureMapEl,
} from '../common.js';

import adventureData from '../data/adventureData.js';
import renderAdventureDetails from './AdventureDetails.js';

const initMap = async () => {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

    // Store info windows so they can be looped through and closed
    const infoWindows = [];

    // Store markers for the clusterer
    const markers = [];

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
        markers.push(marker);

        marker.addListener('click', () => {
            closeInfoWindows(infoWindows);
            infoWindow.open(map, marker);
        });
    });

    // Close info windows if map is clicked, dragged, or zoom is changed
    ['click', 'drag', 'zoom_changed'].forEach(event => {
        map.addListener(event, () => closeInfoWindows(infoWindows));
    });

    initClusterer(map, markers);
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

const initClusterer = (map, markers) => {
    // Default SVG that is provided in google's documentation
    const svg = window.btoa(`
    <svg fill="#BB4430" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
        <circle cx="120" cy="120" opacity="0.9" r="70" />
        <circle cx="120" cy="120" opacity=".3" r="90" />
        <circle cx="120" cy="120" opacity=".2" r="110" />
        <circle cx="120" cy="120" opacity=".1" r="130" />
    </svg>`);

    const renderer = {
        render: ({ count, position }) =>
            new google.maps.Marker({
                label: { text: String(count), color: 'white', fontSize: '10px;' },
                position,
                icon: {
                    url: `data:image/svg+xml;base64,${svg}`,
                    scaledSize: new google.maps.Size(45, 45),
                },
                zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
                title: `Cluster of ${count} adventures.`,
            }),
    };

    return new markerClusterer.MarkerClusterer({ markers, map, renderer });  
}

const closeInfoWindows = infoWindows => {
    infoWindows.forEach(window => window.close());
};

initMap();