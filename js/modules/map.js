(function() {
  ymaps.ready(init);

  function init()  {
    let map = new ymaps.Map('map', {
      center: [50.9693, 11.0269],
      zoom: 13,
      controls: ['zoomControl'],
      behaviors: ['drag']
    }, 
    {
      balloonPanelMaxMapArea: 0
    })
    let mark = new ymaps.Placemark([50.964, 11.024], {
      hintContent: '<div class="map__hint">Cafe Vapiano</div>',
      balloonContent: `<div class="map__balloon">
      <span class="map__balloon-text">Cafe Votiv</span><br>
      Dies ist ein unbestatigter Eintrag.<br>
      <br>
      Reichstratsstrabe 17<br>
      1010 Wien<br>
      01 4065913<br>
      <span>cafe votiv.at<br>4 Berichte</span>
      </div>`
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [24,31],
      iconImageOffset: [-12, -31]
    });
    
  map.geoObjects.add(mark);
  }
  
}());