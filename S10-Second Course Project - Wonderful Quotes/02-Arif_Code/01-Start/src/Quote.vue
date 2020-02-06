<template>
    <div class="quote" @click="handleDeleteQuote">{{ quoteText }}</div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
    props: ["quoteText", "quoteId"],
    methods: {
        handleDeleteQuote() {
            eventBus.$emit("quoteClicked", this.quoteId);
        }
    }
};
</script>

<style scoped>
.quote {
    border: solid 1px rgb(192, 192, 192);
    flex-basis: 32%;
    margin: 5px 0px;
    border-radius: 3px;
    padding: 2px 5px;
    height: 50px;
    font-family: "Arizonia";
    font-size: 2rem;
}
.quote:hover {
    background-color: rgb(241, 179, 179);
}
</style>>
