# S6 | Why do we need a Development Server ? 
---

A case for a Development Server
<img src="./assets/06/1.png" alt="missing image" width="800"/>

# S6 | What does "Development Workflow" mean?
---
<img src="./assets/06/2.png" alt="missing image" width="800"/>
- We want to add special features when we ship our code to the prodcution server 
- where the user can see the application
- Features include 
    - Sinlge file templates - i.e. outsourcing the template to a separate file
      - and having it compiled (converted to javascript) before shipping to prodcution server
    - Case insensitive component selectors
    - Preprocessors - babel, sass compiler, etc
- This reduces the package size by 30%

# S6 | Using the Vue CLI to create Projects
---
<img src="./assets/06/3.png" alt="missing image" width="800"/>
<img src="./assets/06/4.png" alt="missing image" width="800"/>

# S6 | Installing the Vue CLI and Creating a new Project
---
Install node
<img src="./assets/06/5.png" alt="missing image" width="800"/>
- package manager
- needed for the development server provided by the vue cli - uses node in the background

Vue-cli docs
<img src="./assets/06/7.png" alt="missing image" width="800"/>
<img src="./assets/06/8.png" alt="missing image" width="800"/>
<img src="./assets/06/9.png" alt="missing image" width="800"/>

Installing vue-cli
<img src="./assets/06/6.png" alt="missing image" width="800"/>
<img src="./assets/06/10.png" alt="missing image" width="800"/>

Go to the app folder and start app
<img src="./assets/06/11.png" alt="missing image" width="800"/>
- `cd vue-cli` - this name is upto you
- `npm install` - will install the dependancy packages

Run `npm run dev`  
<img src="./assets/06/12.png" alt="missing image" width="800"/>
- starts our development server 
- recompile everything 
- re-load server automatically whenever we change a file

Starting page - template
<img src="./assets/06/13.png" alt="missing image" width="800"/>

# S6 | An Overview over the Webpack Template Folder Structure
---
`index.html`
<img src="./assets/06/14.png" alt="missing image" width="800"/>
- dist/build.js in development mode lives in the Memory
- you can only see it when building the app for Prodcution

`package.json`
<img src="./assets/06/15.png" alt="missing image" width="800"/>

`App.vue` needs the vue-loader
<img src="./assets/06/16.png" alt="missing image" width="800"/>

# S6 | Understanding ".vue" Files
---
First thing that get executed when loading the build.js in the index.html file
<img src="./assets/06/17.png" alt="missing image" width="800"/>

`main.js` - The Vue instance
<img src="./assets/06/18.png" alt="missing image" width="800"/>
- `render()` - tells Vue to render a specific template at the DOM 
- selected by the `el` property i.e `#app`
- `render` - is a function provided by vue which take another function as argument 
- which when executed renders the template passed as the argument `h => h(App)`
- here `App` is the template 
- `h` is the function that renders it

App.vue
<img src="./assets/06/19.png" alt="missing image" width="800"/>
- always follows this structure
- has a template
- a script
- styling

Template
<img src="./assets/06/20.png" alt="missing image" width="800"/>

Script
<img src="./assets/06/21.png" alt="missing image" width="800"/>

Styling
<img src="./assets/06/22.png" alt="missing image" width="800"/>

We must have a template
Template changed
<img src="./assets/06/23.png" alt="missing image" width="800"/>

This is enough to render a vue app
<img src="./assets/06/24.png" alt="missing image" width="800"/>

We render the App.vue in the main.js
<img src="./assets/06/25.png" alt="missing image" width="800"/>

`App.vue`
<img src="./assets/06/26.png" alt="missing image" width="800"/>

Output
<img src="./assets/06/27.png" alt="missing image" width="800"/>

Single file template
<img src="./assets/06/28.png" alt="missing image" width="800"/>
- we outsource template and script logic in a separate file
- webpack compiles this file `App.vu` as javascript code
- which can then be rendered in the `main.js`
- this is how we can get rid of the browser compiler
- and have our compiled template

# S6 | Understanding the Object in the Vue File
---
Object - same as a vue instance 
<img src="./assets/06/29.png" alt="missing image" width="800"/>
- so we have the same properties like we have in a vue instance
- data, methods, computed, etc

The `App.vue` file might have nothing except the template
<img src="./assets/06/30.png" alt="missing image" width="800"/>
<img src="./assets/06/31.png" alt="missing image" width="800"/>
- because the script is not required
- its required if you want to attach business logic to this tmeplate
- or you want to show data in the tmplate through interpolation

# S6 | How to Build your App for Production
---
build
<img src="./assets/06/32.png" alt="missing image" width="800"/>
<img src="./assets/06/33.png" alt="missing image" width="800"/>
- builds the app for production 
- builds the dist folder
- optimization - minified
- this is done if you want to deploy your application

# S6 | Module Wrap Up
---
<img src="./assets/06/34.png" alt="missing image" width="800"/>
Single template files 

# S6 | More about ".vue" Files and the CLI

## The ".vue" File
You can learn more about ".vue" Files in this Article from the official Docs: http://vuejs.org/guide/single-file-components.html

Learn more about the render()  method in another Article in the official Docs: http://vuejs.org/guide/render-function.html

Finally, it's important to be aware of the fact, that you can also load your App.vue File (your main Component/ Instance) via the following two Ways (Alternatives to render() ):

1. **Using the ES6 Spread Operator (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):**
   - `npm install --save-dev babel-preset-stage-2`
   - config
    ```js
        .babelrc:

        {
        "presets": [
            ["es2015", { "modules": false }],
            ["stage-2"]
        ]
        }


        import Vue from 'vue'
        import App from './App.vue'
        
        new Vue({
        el: '#app',
        ...App
        });
    ```

2. **Using mount() :**
    - Also install the stage-2 preset as described above.
        ```js
        import Vue from 'vue'
        import App from './App.vue'
        
        const vm = new Vue({
        ...App
        });
        
        vm.$mount('#app');
        ```

## The CLI

Learn more about the CLI here: https://github.com/vuejs/vue-cli

## Local CSS / Sass Files and CLI Templates

**The webpack-simple template doesn't support local CSS or Sass files, because no CSS loader is set up.**

Use the **webpack** template (not webpack-simple) to get this functionality: https://github.com/vuejs-templates/webpack

# S6 | Debugging VueJS Projects
There are two main Tools you may use:

1) The Developer Tools in Chrome (see below)

2) The Vue Developer Tools (https://github.com/vuejs/vue-devtools)

When working with a Project created by the CLI (using Webpack!), you can easily debug your running Application by opening your Developer Tools (see below in Chrome) and going to "Sources" there. 

You should see a "Webpack" folder which you may open to see all your files included in the project (see image below, in orange box).

You can open any file there and set breakpoints etc. to debug your running application.
<img src="./assets/06/35.png" alt="missing image" width="800"/>