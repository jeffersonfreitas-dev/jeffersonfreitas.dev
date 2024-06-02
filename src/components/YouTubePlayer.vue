<template>
  <div>
    <vue-plyr>
      <div data-plyr-provider="youtube" :data-plyr-embed-id="videoId"></div>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'YouTubePlayer',
  props: {
    videoId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>