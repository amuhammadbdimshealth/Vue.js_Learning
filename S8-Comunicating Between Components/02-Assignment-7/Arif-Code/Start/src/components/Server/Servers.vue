<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers">
                <Server :serverId="server.serverId" :status="server.status"></Server>
            </li>
        </ul>
    </div>
</template>

<script>
import Server from "./Server.vue";
import { eventBus } from "../../main.js";
export default {
    components: {
        Server: Server
    },
    data: function() {
        return {
            servers: [
                { serverId: 100, status: "Critical" },
                { serverId: 200, status: "Normal" },
                { serverId: 300, status: "Good" },
                { serverId: 400, status: "Critical" },
                { serverId: 500, status: "Normal" }
            ]
        };
    },
    created() {
        // Check the solution on Udemy - this is not required if you would have passed the server object directly
        eventBus.$on("resetServerStatus", resetServer => {
            // console.log(resetServer);
            const serverId = resetServer.serverId;
            let updatedServerIndex = this.servers.findIndex(
                s => s.serverId == serverId
            );
            this.servers[updatedServerIndex].status = resetServer.status;
        });
    }
};
</script>

<style>
</style>
