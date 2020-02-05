# S1 | Getting Started
---
## Vue Js Features
<img src="./assets/01/3.png" alt="missing image" width="800"/>
<img src="./assets/01/4.png" alt="missing image" width="800"/>
<img src="./assets/01/1.png" alt="missing image" width="800"/> 

# S1 |  Let's Create our First VueJS Application
---
## Installation
Cdn
<img src="./assets/01/2.png" alt="missing image" width="800"/> 

Source Code
<img src="./assets/01/5.png" alt="missing image" width="800"/>
- copy the link to get access to vuejs 

Code on Js Fiddle
<img src="./assets/01/6.png" alt="missing image" width="800"/>

Copy the link
<img src="./assets/01/7.png" alt="missing image" width="800"/>
- remove the version number to always fetch the latest version

The `el` property
<img src="./assets/01/8.png" alt="missing image" width="800"/>
- Vue instance 
- The constructor function expects an object
- The `el` prop of that object represents the dom element that you want to control with Vue.

The `el` property
<img src="./assets/01/9.png" alt="missing image" width="800"/>

Passing data - through The `data` prop
<img src="./assets/01/10.png" alt="missing image" width="800"/>
- the data is an object

Passing title - The `data` prop
<img src="./assets/01/11.png" alt="missing image" width="800"/>

# S1 | Extending the VueJS Application
---
`v-on` - Directive
<img src="./assets/01/12.png" alt="missing image" width="800"/>
- `v-on` takes as argument the event
- which is passed after a `colon (:)`
- changeTitle is a function 

changeTitle
<img src="./assets/01/13.png" alt="missing image" width="800"/>
- data.title ? **Nooo** 

`this.title`
<img src="./assets/01/14.png" alt="missing image" width="800"/>
- It's some magic being done in the background by Vue.js.
- It proxies all our data properties like title to the top Vue instance object automatically;
- Which is why we can access it with 'this'.

`this.title`
<img src="./assets/01/15.png" alt="missing image" width="800"/>
But for now it's just important to keep in mind you got
access to all the **properties** stored in **`data`** and also to all the **methods** stored in **`methods`** by accessing them with **`this.name`**.

The event is passed by default by javascript
<img src="./assets/01/16.png" alt="missing image" width="800"/>
- It works !

# S1 | Course Structure
---
<img src="./assets/01/17.png" alt="missing image" width="800"/>

# S1 | Take Advantage of all Course Resources!
---
<img src="./assets/01/19.png" alt="missing image" width="800"/>

# S1 |  Setup VueJS Locally
---
<img src="./assets/01/20.png" alt="missing image" width="800"/>

<img src="./assets/01/21.png" alt="missing image" width="800"/>

<img src="./assets/01/22.png" alt="missing image" width="800"/>

<img src="./assets/01/23.png" alt="missing image" width="800"/>

# S1 | Module Resources & Useful Links
---
## The starting project can be found on 
JSFiddle: https://jsfiddle.net/smax/c4mcxu7s/

## Useful Links:
Official Docs - VueJS Installation: http://vuejs.org/guide/installation.html