<template>
    <div>
        <div class="head">
            <slot name="header"></slot>
        </div>
        <div class="shead">
            <slot name="sub-header"></slot>
        </div>
        <slot class="default"></slot>
    </div>
</template>

<script>
</script>

<style scoped>
div {
    border: 1px solid red;
    background-color: lightcoral;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
}
div .head,
div .shead {
    border: 1px solid red;
    background-color: wheat;
    padding: 5px;
    margin: 1px auto;
    text-align: center;
}
</style>