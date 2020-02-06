import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
    data: {
        maxQuotes: 10
    }
});

new Vue({
    el: "#app",
    render: h => h(App)
});

/*
1. Add Quotes - DONE
2. Progress Bar Updates - DONE
3. Once 10 quotes reached show an alert - DONE
4. Delete Quotes
5. Click on a quote to delete
6. Update progress bar
*/
