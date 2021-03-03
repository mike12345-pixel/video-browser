<template>
    <li>
        <!-- reference computed property function which itself uses props to return the value (rather than a JS expression) -->
        <img :src="thumbnailUrl" />
        {{ video.snippet.title }}
    </li>
</template>

<script>
    export default {
            name: 'VideoListItem',
            props: {
                    video: Array,
                },
            computed: {
                    thumbnailUrl() {
                            return this.video.snippet.thumbnails.default.url;
                        },
                },
        };
</script>