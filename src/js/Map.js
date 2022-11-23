import loadApi from "./moduls/loadApi";
import initMapOverlay from "./moduls/mapOverlay";

export default function map() {
  const mapElement = document.querySelector('.js-map');
  if (mapElement) {
    const url = `https://api-maps.yandex.ru/2.1/?apikey=${mapElement.dataset.api}&lang=ru_RU`;
    loadApi('yandex', url, () => {
      ymaps.ready(init);
    });
  }

  initMapOverlay('.js-overlay', 'js-overlay-container');

  function init() {
    const map = new ymaps.Map(mapElement, {
      center: [mapElement.dataset.initialLongitude, mapElement.dataset.initialLatitude],
      zoom: mapElement.dataset.initialZoom,
      controls: ['zoomControl']
    });

    addPlace(map, {
      coords: [mapElement.dataset.initialLongitude, mapElement.dataset.initialLatitude],
      image: mapElement.dataset.image
    })
  }
}

function addPlace(map, {
  coords,
  image
}) {
  const placemarkProperties = {};

  const placemarkOptions = {
    iconLayout: 'default#image', // pieChart
    iconImageHref: image,
    iconImageSize: [60, 60],
    iconImageOffset: [-30, -60]
  };

  const placemark = new ymaps.Placemark(coords, placemarkProperties, placemarkOptions);

  map.geoObjects.add(placemark);
}