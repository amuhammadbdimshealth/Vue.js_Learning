new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Warning")
            },
            handleKeyDown: function(e) {               
                console.log("DOWN")
                this.value = e.target.value;
            }
        }
    });