import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({});
new Vue({
    el: "#app",
    render: h => h(App)
});

/* ASSIGNMENT-7 ( tasks )
1. Create a new component called servers - DONE
2. Loop over the list of servers - DONE
3. Pass the id and server status to the server component - DONE
4. When you click a server, load the server detail using the ServerDetails component - DONE
5. In the Server details component there would be a button which when clicked will change the status of the server back to normal - DONE
*/
