<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <div v-else>Server# : {{ server.serverId }} - Status: {{ server.status }}</div>
        <button class="btn btn-primary" @click="resetServerStatus">Reset Status</button>
    </div>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
    data: function() {
        return {
            server: null
        };
    },

    methods: {
        resetServerStatus() {
            this.server.status = "Normal";
            // Check the solution on Udemy - this is not required if you would have passed the server object directly
            eventBus.$emit("resetServerStatus", {
                serverId: this.server.serverId,
                status: this.server.status
            });
        }
    },
    created() {
        eventBus.$on("serverWasClicked", data => {
            this.server = data.server;
            console.log(data);
        });
    }
};
</script>

<style>
</style>
