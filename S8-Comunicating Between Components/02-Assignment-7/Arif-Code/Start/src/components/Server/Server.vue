<template>
    <p @click="handleClickServer">Server# : {{ serverId }} - Status: {{ status }}</p>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
    props: {
        serverId: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClickServer() {
            // pass the server information to the server details component
            eventBus.$emit("serverWasClicked", {
                server: {
                    serverId: this.serverId,
                    status: this.status
                }
            });
        }
    }
};
</script>

<style>
</style>