<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br />
                <button
                    class="btn btn-primary"
                    @click="selectedComponent = 'appBlue'"
                >Load Blue Template</button>
                <button
                    class="btn btn-success"
                    @click="selectedComponent = 'appGreen'"
                >Load Green Template</button>
                <button
                    class="btn btn-danger"
                    @click="selectedComponent = 'appRed'"
                >Load Red Template</button>
                <hr />
                <component :is="selectedComponent">
                    <h1 slot="header">This a Content for Slot Header</h1>
                    <h2 slot="sub-header">This is Content for Slot Sub-Header</h2>
                    <p>Hi Arif I am the content you have passed as default</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
    data: function() {
        return {
            selectedComponent: "appBlue"
        };
    },
    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
    }
};
</script>

<style>
</style>
