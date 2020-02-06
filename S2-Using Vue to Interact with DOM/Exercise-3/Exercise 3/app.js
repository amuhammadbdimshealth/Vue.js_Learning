new Vue({
    el: "#exercise",
    data: {
        value: 0,
        duration: 2000
    },
    computed: {
        result: function() {
            return this.value < 37 ? "Not yet there" : "Done";
        }
    },
    watch: {
        result: function() {
            var vm = this;
            console.log("VMVAlue-->", vm.value);
            if (vm.value) {
                setTimeout(function() {
                    console.log("Resetting...");
                    vm.value = 0;
                }, vm.duration);
            }
        }
    }
});
