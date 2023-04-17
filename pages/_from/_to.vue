<template>
  <div> <!-- 根元素 -->
    <h1>{{ fromLocation.name }} 到 {{ toLocation.name }}</h1>
    <!-- ... 更多內容 -->

    <div>
      <h2>更多從 {{ fromLocation.name }} 附近出發的路線</h2>
      <ul>
        <li v-for="route in relatedRoutes" :key="route.from + route.to">
          <nuxt-link :to="`/${route.from}/${route.to}`">{{ route.from }} → {{ route.to }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div>
      <h2>除了 {{ fromLocation.name }} 到 {{ toLocation.name }}，還有⋯</h2>
      <ul>
        <li v-for="route in recommendedRoutes" :key="route.from + route.to">
          <nuxt-link :to="`/${route.from}/${route.to}`">{{ route.from }} → {{ route.to }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// pages/route/_from/_to.vue
import locations from '@/locations.js';

export default {
  async asyncData({ params }) {
    const fromLocation = locations.find((location) => location.name === params.from);
    const toLocation = locations.find((location) => location.name === params.to);

    const relatedRoutes = locations
      .filter((location) => location.region === fromLocation.region && location.id !== fromLocation.id)
      .slice(0, 10)
      .map((location) => {
        let randomDestination;
        do {
          randomDestination = locations[Math.floor(Math.random() * locations.length)];
        } while (location.id === randomDestination.id);
        return { from: location.name, to: randomDestination.name };
      });

    const recommendedRoutes = Array.from({ length: 10 }, () => {
      let randomFrom, randomTo;
      do {
        randomFrom = locations[Math.floor(Math.random() * locations.length)];
        randomTo = locations[Math.floor(Math.random() * locations.length)];
      } while (randomFrom.id === randomTo.id);
      return { from: randomFrom.name, to: randomTo.name };
    });


    return { fromLocation, toLocation, relatedRoutes, recommendedRoutes };
  },
};

</script>