import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

if (document.getElementById('mapa1')) {
  const mapa1 = L.map('mapa1').setView([41.39978371136088, 2.169337097700052], 15)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa1)
  L.marker([41.39978371136088, 2.169337097700052])
    .addTo(mapa1)
    .bindPopup('¡Estamos aquí!')
    .openPopup()
}

if (document.getElementById('mapa2')) {
  const mapa2 = L.map('mapa2').setView([41.38756925493965, 2.16970652653478], 15)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa2)
  L.marker([41.38756925493965, 2.16970652653478])
    .addTo(mapa2)
    .bindPopup('¡Estamos aquí!')
    .openPopup()
}