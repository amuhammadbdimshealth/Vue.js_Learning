<template>
    <div class="quotes">
        <quote v-for="(quote,i) in quotes" :quoteText="quote" :quoteId="i"></quote>
    </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
    components: {
        quote: Quote
    },
    props: ["quotes"]
};
</script>

<style scoped>
.quotes {
    padding: 5px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* border: 1px solid goldenrod; */
}
</style>
