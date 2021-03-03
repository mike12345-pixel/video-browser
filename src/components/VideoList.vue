<template>
  <ul>
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      @videoSelect="onVideoSelect"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  props: ["videos"],
  // tell component what data it should expect from parent & validate data type (optional)
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    },
  },
};
</script>

<!-- adding 'scoped' ensures any css we add here will only be applied to this component -->
<style scoped></style>
