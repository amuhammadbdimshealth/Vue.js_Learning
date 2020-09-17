var example1 = new Vue({
    el: "#example-1",
    data: {
        counter: 0,
    },
});

var example2 = new Vue({
    el: "#example-2",
    data: {
        name: "Arif-Vue.js",
    },
    // define methods under the `methods` object
    methods: {
        greet: function (event) {
            // `this` inside methods points to the Vue instance
            alert("Hello " + this.name + "!");
            // `event` is the native DOM event
            if (event) {
                console.log(event);
                alert(event.target.tagName);
            }
        },
    },
});

var example3 = new Vue({
    el: "#example-3",
    methods: {
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            // now we have access to the native event
            if (event) {
                console.log(event);
                // event.preventDefault() //not required since 'v-on:click.prevent' used in html
            }
            alert(message);
        },
    },
});

var example4 = new Vue({
    el: "#example-4",
    data: {
        checkedNames: [],
        selected: "",
        selectedDynamic: "",
        options: [
            { text: "One", value: "A" },
            { text: "Two", value: "B" },
            { text: "Three", value: "C" },
        ],
    },
});

var example5 = new Vue({
    el: "#example-5",
    data: {
        radioObjectOption1: { name: "Arif", age: 10 },
        radioObjectOption2: { name: "Juthi", age: 20 },
        pick: null,
        selectedVbind: null,
    },
});

Vue.component("button-counter", {
    data: function () {
        return {
            count: 0,
        };
    },
    template:
        '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

Vue.component("blog-post", {
    props: ["title", 'image'],
    template: `
    <div style="border: 2px solid; margin-top: 4px; background-color: goldenrod;">
      <h4>Blog: {{ title }}</h4>
      <p>{{ image }}</p>     
    </div>
  `,
});

new Vue({
    el: "#components-demo",
    data: {
        posts: [
            { id: 1, title: "My journey with Vue", imageLink: 'www.image1.com'},
            { id: 2, title: "Blogging with Vue", imageLink: 'www.image2.com' },
            { id: 3, title: "Why Vue is so fun", imageLink: 'www.image3.com' },
        ],
    },
});
