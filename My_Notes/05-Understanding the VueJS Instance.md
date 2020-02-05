-------------------------------------------------------------------
`1+3+3+3+4+5+6 = 4`
-------------------------------------------------------------------
# S5 | 05-Understanding the VueJS Instance
---

# S5 | Model Introduction
---
<img src="./assets/05/1.png" alt="missing image" width="800"/>


# S5 | Some Basics about the VueJS Instance
---
<img src="./assets/05/2.png" alt="missing image" width="800"/>
<img src="./assets/05/3.png" alt="missing image" width="800"/>
<img src="./assets/05/4.png" alt="missing image" width="800"/>
<img src="./assets/05/5.png" alt="missing image" width="800"/>
<img src="./assets/05/6.png" alt="missing image" width="800"/>

Can we have multiple vue instance  - Yes
Can the vue instance me interacted with from outside the instance itself - Yes

# S5 | Using Multiple Vue Instances
---
We can have multiple instances for multiple elements
<img src="./assets/05/8.png" alt="missing image" width="800"/>
- inside of an instance you can only access the Properties of that specific instance with the `this` keyword.

- Its fine to have multiple vue instances controlling different parts of the page.
- They can exist as separate widgets on the same page.
- But this is good **as long as you dont have any connection be tween the vue instances**. 

# S5 | Accessing the Vue Instance from Outside
--- 
We are not storing the vue instance in a variable yet
<img src="./assets/05/9.png" alt="missing image" width="800"/>

Create 2 vue instances and access one from the other
<img src="./assets/05/10.1.png" alt="missing image" width="800"/>
<img src="./assets/05/11.png" alt="missing image" width="800"/>
<img src="./assets/05/12.png" alt="missing image" width="800"/>
<img src="./assets/05/13.png" alt="missing image" width="800"/>
<img src="./assets/05/14.png" alt="missing image" width="800"/>
<img src="./assets/05/15.png" alt="missing image" width="800"/>

Accessing vue instance from normal js code
<img src="./assets/05/16.png" alt="missing image" width="800"/>
- accessing from setTimeout

# S5 | How VueJS manages your Data and Methods
--- 
Note that vue instacne proxies the data property and methods so that we can access them easily from the outside world
<img src="./assets/05/17.png" alt="missing image" width="800"/>

This wont work 
<img src="./assets/05/18.png" alt="missing image" width="800"/>
- I can add a property like this to the vue Instance
- But I cannot use it In the vue instance
- Its not reactive 
- vue js is not watching it, since it only creates watchers for everything we pass as argument to the Vue instance constructor

Proxy - Properties 
<img src="./assets/05/19.png" alt="missing image" width="800"/>
- with getters and setters 

Manual - property ( without using constructor )
<img src="./assets/05/21.png" alt="missing image" width="800"/>
- does not have the getter and setter
- since this was not created using the vue js constructor

Summary 
- So this is important to understand, this proxying of properties that vuejs watches them for us, that we can access them from outside of the instance by directly accessing them on our vm variable where we store the instance but that we cannot add new properties or that we can add them but they won't work as normal properties we pass in this data property here or as methods when creating this vue instance.


# S5 | A Closer Look at `$el` and `$data`
--- 
Lets talk about some Properties which were creaed by vue itself
<img src="./assets/05/23.png" alt="missing image" width="800"/>
- `$el`, `$data`, `$refs`

$el - is the element that the vue instance is hooked up with

$data 
<img src="./assets/05/27.png" alt="missing image" width="800"/>
- the data block we passed to the vue instance
    - <img src="./assets/05/25.png" alt="missing image" width="800"/>
- so we can access the data in 2 ways 
- using the vue instacne vm
- or vm.$data.property

Lets prove this
<img src="./assets/05/26.png" alt="missing image" width="800"/>

See if the $data is same as the data var we created
<img src="./assets/05/28.png" alt="missing image" width="800"/>
<img src="./assets/05/30.png" alt="missing image" width="800"/>
- Lets chnage the data var and see if that also changes the vue instance $data
- since we know that objects are reference types
- We can use a normal javascript variable to populate our data

# S5 |  Placing $refs and Using them on your Templates
--- 
What if i want to get the current content of the `show Paragrapgh` button
<img src="./assets/05/31.png" alt="missing image" width="800"/>
- in vanilla js - we could select it with a query selector 

In vue js we could use the following syntax using ref
<img src="./assets/05/32.png" alt="missing image" width="800"/>
- use the ket `ref` on the element of choice thus registering it 

$refs property - We can access the registered refs 
<img src="./assets/05/33.png" alt="missing image" width="800"/>

Output
<img src="./assets/05/34.png" alt="missing image" width="800"/>
<img src="./assets/05/35.png" alt="missing image" width="800"/>

Access references we registered using the name we set up as a property
<img src="./assets/05/36.png" alt="missing image" width="800"/>

We can also change the innerText using ref
<img src="./assets/05/37.png" alt="missing image" width="800"/>

output
<img src="./assets/05/38.png" alt="missing image" width="800"/>
<img src="./assets/05/39.png" alt="missing image" width="800"/>
- renamed to test. wow .. how ?
- we are able to access html elements just like that using refs

What if we want to access an element already in control of vue js
i.e if we are outputting the content using interpolation 
<img src="./assets/05/40.png" alt="missing image" width="800"/>
<img src="./assets/05/41.png" alt="missing image" width="800"/>

Change text of the heading 
<img src="./assets/05/42.png" alt="missing image" width="800"/>
<img src="./assets/05/43.png" alt="missing image" width="800"/>

But we see that the value has been overriten
<img src="./assets/05/44.png" alt="missing image" width="800"/>
- this is beacause vue will always render according to the template we provide
- so our change using refs might be overridden
- since this does not change the template
- refs are more useful in getting values from a dom element 
- rather than changing it

# S5 | Where to learn more about the Vue API
--- 
vuejs.or..api
<img src="./assets/05/45.png" alt="missing image" width="800"/>

# S5 | Mounting a Template
---
## We already know this
<img src="./assets/05/46.png" alt="missing image" width="800"/>
- vue picks the app1 div as the template since we tell vue to do so
- using the `el` property - telling choose `app1` 

## We Can Manually pass the element where we want to mount our application
Remove the `el` prop
<img src="./assets/05/47.png" alt="missing image" width="800"/>

We can manually pass the element where we want to mount our application using `vm.mount()`
<img src="./assets/05/48.png" alt="missing image" width="800"/>
- it does the same thing as the `el` property 

Set the element 
<img src="./assets/05/49.png" alt="missing image" width="800"/>
- output Works again 
- the mothods with `$` sign seems to be the vue js native properties or methods

Where this can be useful ? 
- In cases where you dont know beforehand where to mount your app

## Another thing we can do with template and instances
New DOM element `app3`
<img src="./assets/05/50.png" alt="missing image" width="800"/>

New Vuew instance `vm3`
<img src="./assets/05/51.png" alt="missing image" width="800"/>

Template - a vue instance can have its own template 
<img src="./assets/05/52.png" alt="missing image" width="800"/>

Now we can mount our vue app on a specific element using `$mount`
<img src="./assets/05/53.png" alt="missing image" width="800"/>

We can also use vanilla js to mount our app on the element
<img src="./assets/05/54.png" alt="missing image" width="800"/>
- access the template using `vm3.$el`

# S5 | Using Components
---
Vue Component
<img src="./assets/05/55.png" alt="missing image" width="800"/>
- the first argument : is the custom tag/selector that would be used for the component
- template : is the html to use 
- so every `hello` element would be replaced with the template

# S5 | Limitations of some Templates
---
## Limitation of template
1. String is not a good way to write html 
2. We wont get the ide to throw the html errors

## Two versions of Vuejs
1. With compiler - that runs in the browser - supports template
2. Without the compile - precompiled js

# S5 | How VueJS Updates the DOM
---
<img src="./assets/05/56.png" alt="missing image" width="800"/>

# S5 | The VueJS Instance Lifecycle
---
<img src="./assets/05/57.png" alt="missing image" width="800"/>

# S5 | The VueJS Instance Lifecycle in Practice
---
Hooks - note that they are not inside the methods property
<img src="./assets/05/58.png" alt="missing image" width="800"/>
<img src="./assets/05/59.png" alt="missing image" width="800"/>
<img src="./assets/05/60.png" alt="missing image" width="800"/>

Destroy method
<img src="./assets/05/61.png" alt="missing image" width="800"/>
- `$destroy` will destro the instance

OUtput - Create / mount hooks
<img src="./assets/05/62.png" alt="missing image" width="800"/>

Output- update hooks
<img src="./assets/05/63.png" alt="missing image" width="800"/>

Repeated click on update ?
<img src="./assets/05/64.png" alt="missing image" width="800"/>
- does not cause the update hooks to fire again since nothing changed

Destroy 
<img src="./assets/05/65.png" alt="missing image" width="800"/>
- It removes all the js logic
- All connections are now dead

# S5 | Module Wrap Up
--- 

# S5 | Module Resources & Useful Links
--- 

## JSFiddle:

The Vue Instance Code: https://jsfiddle.net/smax/9a2k6cja/2/
The VueJS Instance Lifecycle: https://jsfiddle.net/smax/jcgw7ak8/
Useful Links:

## Official Docs - 
The Vue Instance: http://vuejs.org/guide/instance.html
