<script setup>
import {LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet";
import {ref} from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'leaflet/dist/images/marker-icon.png',
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});

const zoom = ref(4);
const center = ref([47.41322, -1.219482]);

const markers = ref([
  {
    title: 'Rennes',
    mark: [47.41322, -1.219482],
  },
  {
    title: 'Paris',
    mark: [48.8566, 2.3522],
  },
  {
    mark: [51.5074, -0.1278],
    title: 'London'
  }
]);
</script>

<template>
 <div>
   <div class="h-[600px] w-full">
     <l-map :zoom="zoom" :center="center">
       <l-tile-layer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           layer-type="base"
           name="OpenStreetMap"
       />
       <l-marker
           v-for="(position, index) in markers"
           :key="index" :lat-lng="position.mark"
       >
         <l-popup>
           {{ position.title }}
         </l-popup>
       </l-marker>
     </l-map>
   </div>
 </div>
</template>
