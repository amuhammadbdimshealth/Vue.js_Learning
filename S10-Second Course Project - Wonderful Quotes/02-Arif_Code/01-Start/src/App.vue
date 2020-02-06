<template>
    <div class="container">
        <progress-bar :numQuotes="quotes.length"></progress-bar>
        <add-quote :addQuote="handleAddQuote"></add-quote>
        <quotes :quotes="quotes"></quotes>
        <div class="bg-danger text-center">Info: Click on a quote to delete</div>
    </div>
</template>

<script>
import QuoteList from "./QuoteList.vue";
import AddQuote from "./AddQuote.vue";
import ProgressBar from "./ProgressBar.vue";
import { eventBus } from "./main.js";
export default {
    components: {
        quotes: QuoteList,
        addQuote: AddQuote,
        progressBar: ProgressBar
    },
    data() {
        return {
            quotes: [
                "My first quote",
                "My second quote",
                "Third quote",
                "Strength is not to overcome someone physically"
            ]
        };
    },
    methods: {
        handleAddQuote(quoteText) {
            if (this.quotes.length == eventBus.maxQuotes) {
                alert("Delete some quotes");
                return;
            }
            this.quotes.push(quoteText);
        }
    },
    mounted() {
        eventBus.$on("quoteClicked", quoteId => {
            this.quotes.splice(quoteId, 1);
        });
    }
};
</script>

<style>
* {
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3rem;
}
</style>
