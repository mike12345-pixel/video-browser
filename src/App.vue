<template>
    <div>
        <!-- listen for custom events coming from the SearchBar component -->
        <SearchBar @termChange="onTermChange"></SearchBar>
        <!-- passing props using v-bind directive. :videos is shorthand for v-bind:videos -->
        <VideoList :videos="videos"></VideoList>
    </div>
</template>

<script>
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList'
    import axios from 'axios';
    const API_KEY='AIzaSyD2XekwcAFMhjtQRimIyoDGxjCXzd6x598';


    export default {
        name: 'App',
        components: {
            SearchBar,
            VideoList,
            },
        data() {
            // initial state
            return {
                videos: [],
            };
        },
        methods: {
            // event handler
            onTermChange(searchTerm) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet', // how much detail to return
                        q: searchTerm, // search query
                        }
                }).then(
                    // callback for success
                    (response) => {
                    // push data from api call into state
                    // data property is changed so the app automatically rerenders with each call
                    this.videos = response.data.items;
                    },
                    // callback for failure
                    () => {
                        console.log("unsuccessful youtube request")
                    });
            }
        }
    };
</script>

<!-- import the component, register it under the components property, then use it -->
