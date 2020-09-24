// Basics
var example0 = new Vue({
    el: "#example-0",
    data: {
        rawHtml: `<span style="color:red">This should be red. Its a raw HTML</span>`,
    },
});

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

// Components
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
    props: ["title", "image"],
    template: `
    <div class="blog-post">
      <h4>Blog: {{ title }}</h4>
      <p>{{ image }}</p>     
    </div>
  `,
});

Vue.component("blog-post2", {
    props: ["post"],
    template: `
    <div class="blog-post-obj">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `,
});

var vueParentComponent1 = new Vue({
    el: "#components-demo",
    data: {
        posts: [
            {
                id: 1,
                title: "My journey with Vue",
                imageLink: "www.image1.com",
                content: `<span class='chtml'>Custom blog html</span>`,
            },
            { id: 2, title: "Blogging with Vue", imageLink: "www.image2.com" },
            { id: 3, title: "Why Vue is so fun", imageLink: "www.image3.com" },
        ],
    },
});

Vue.component("blog-post3", {
    props: ["post"],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 2)">
        Enlarge text for all siblings
      </button>
      <button v-on:click="$emit('shrink-text', 4)">
        Shrink text for all siblings
      </button>
            
    </div>
  `,
});

var vueParentComponent2 = new Vue({
    el: "#blog-posts-events-demo",
    data: {
        posts: [
            {
                id: 1,
                title: "My journey with Vue",
                imageLink: "www.image1.com",
                content: `<span class='chtml'>Custom blog html</span>`,
            },
            { id: 2, title: "Blogging with Vue", imageLink: "www.image2.com" },
            { id: 3, title: "Why Vue is so fun", imageLink: "www.image3.com" },
        ],
        postFontSize: 12,
    },
    methods: {
        onShrinkText: function (shrinkAmount) {
            this.postFontSize -= shrinkAmount;
        },
    },
});

Vue.component("custom-input", {
    props: ["value", "id"],
    template: `
    <input
      v-bind:id="id"
      v-bind:value="value"
      v-on:input="$emit('input',$event.target.value)"
    >
  `,
});

var vueParentComponent3 = new Vue({
    el: "#vmodel-on-components",
    data: {
        myInputValue1: "Arif1",
        myInputValue2: "Arif2",
        searchText1: "parentText1",
        searchText2: "parentText2",
        searchText3: "parentText3",
    },
    methods: {
        fireMe: function () {
            this.myInputValue2 = event.target.value;
        },
    },
});

// Content Distribution with Slots
Vue.component("alert-box", {
    template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `,
});

var vueParentComponent4 = new Vue({
    el: "#demo-alert-box",
});

// Dynamic Components
Vue.component("Home", {
    template: "<div>Home component</div>",
});
Vue.component("About", {
    template: "<div>About component</div>",
});
var dynamicComponentDemo = new Vue({
    el: "#dynamic-component-demo",
    data: {
        tabs: ["Home", "About"],
        currentTab: "Home",
    },
    computed: {
        currentTabComponent: function () {
            return this.currentTab;
        },
    },
});
