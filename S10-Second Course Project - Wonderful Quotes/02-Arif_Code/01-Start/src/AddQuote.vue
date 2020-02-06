<template>
    <div class="add-quote">
        <h3>Add Quote</h3>
        <p class="quote-text">
            <textarea name="quote-text" id="quote-text" cols="100" rows="5" v-model="quoteText"></textarea>
        </p>
        <button @click="addQuoteTxt" class="btn btn-primary">Add Quote</button>
    </div>
</template>

<script>
import QuoteList from "./QuoteList.vue";
export default {
    props: ["addQuote"],
    data() {
        return {
            quoteText: "Arif"
        };
    },
    methods: {
        addQuoteTxt() {
            this.addQuote(this.quoteText);
        }
    }
};
</script>

<style scoped>
.add-quote {
    text-align: center;
}
.quote-text textarea {
    display: block;
    margin: auto auto;
}
</style>>

