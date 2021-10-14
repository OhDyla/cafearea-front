<template>
 <div>
    <button @click="getLocation">
     現在地探索
    </button>
    <div>
      <div>経度 : {{ latitude }}</div>
      <div>緯度 : {{ longitude }}</div>
    </div>
 </div>
</template>

<script lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'

export default {

  setup(_, context) {

    let latitude = ref<number>(0);
    let longitude = ref<number>(0);

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position){
            let coords = position.coords;
            latitude.value = coords.latitude;
            longitude.value = coords.longitude;
            console.log(coords);
          }.bind(this),
          function(error) {
            // error handlling
          }
        );
      } else {
        // error handlling
      }
    }

    return {
      getLocation,
      latitude,
      longitude,
    }
  }
}
</script>