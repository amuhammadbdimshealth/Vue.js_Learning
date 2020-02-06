new Vue({
    el: "#exercise",
    data: {
        effectStarted: false,
        toggleStyle: null,
        intv: null,
        styleGold: "golden",
        styleHealthy: "healthy",
        userClass: null,
        userClass2: null,
        highlightYesNo: false,
        userWidth: 0,
        startProgress: false,
        intv2: null
    },
    computed: {
        myStyleClass: function() {
            if (this.effectStarted) {
                return this.toggleStyle ? "highlight" : "shrink";
            }
        },
        doHighlight: function() {
            return this.highlightYesNo == "true" ? true : false;
        },
        myStyle: function() {
            return {
                backgroundColor: "blue !important",
                width: this.userWidth + "px",
                height: "20px"
            };
        }
    },
    watch: {
        startProgress: function() {
            const vm = this;
            if (this.startProgress) {
                this.intv2 = setInterval(() => {
                    console.log(vm.userWidth++);
                }, 500);
            } else {
                console.log("clear");
                clearInterval(this.intv2);
            }
        }
    },
    methods: {
        startEffect: function() {
            this.effectStarted = !this.effectStarted;
            this.toggleStyle = true;
            let counter = 0;
            // debugger
            if (this.effectStarted) {
                this.intv = setInterval(() => {
                    console.log("SetInterval", counter++);
                    this.toggleStyle = !this.toggleStyle;
                }, 2000);
            } else {
                clearInterval(this.intv);
            }
        }
    }
});
