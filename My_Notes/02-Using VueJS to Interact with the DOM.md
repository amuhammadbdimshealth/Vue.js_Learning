# S2 | Using VueJS to Interact with the DOM
---

# S2 | Module Introduction
---
<img src="./assets/02/1.png" alt="missing image" width="800"/>

<img src="./assets/02/2.png" alt="missing image" width="800"/>

<img src="./assets/02/3.png" alt="missing image" width="800"/>

<img src="./assets/02/4.png" alt="missing image" width="800"/>

# S2 | How the VueJS Template Syntax and Instance Work Together
---
What do you think we will get from below code ? 
<img src="./assets/02/5.png" alt="missing image" width="800"/>

Output
<img src="./assets/02/6.png" alt="missing image" width="800"/>

- So we not only have access to everything stored in the data just by typing the **name** here but also to
anything stored in the methods property

# S2 |  Accessing Data in the Vue Instance
---
This does not work
<img src="./assets/02/7.png" alt="missing image" width="800"/>

- you cannot access the title like this inside the Vue instance
- Although this is possible in the template

Normally `this` would not refer to the data object
<img src="./assets/02/8.png" alt="missing image" width="800"/>

- Thankfully vuejs also provides us some magic here,
- It proxies these properties and the same is by the way true for the method
- So it would also work that we call a method like this.
- It proxies them in a way that by simply calling `this` anywhere in our vue instance object here will give us access to these proxy properties, methods, whatever it is
- So we can call `this.title` to access the title in the data field because behind the scenes, vuejs kind of creates an easy access for us to these properties.

Output
<img src="./assets/02/9.png" alt="missing image" width="800"/>

# S2 | Binding to Attributes
---
Try binding data to the href prop in <a href>
<img src="./assets/02/10.png" alt="missing image" width="800"/>

- This does not work.
- It considers the `{{` curly braces as a link
  - <img src="./assets/02/11.png" alt="missing image" width="800"/>

- Vue js does not work that way
- We cannot use curly braces `{{` in any html element attribute 
- We can use curly braces where we would output text not on html elements

Binding dynamically
<img src="./assets/02/12.png" alt="missing image" width="800"/>

- `v-bind` causes the html attribute to bind itself to the data in the Vue instance
- `v-bind` expects an argument, which is the name of the attribute we want to bind
- Generally we pass arguments to directives using a `colon (:)`
- Note that we do not use the curly brace `{` since we are already in the Vue template mode when using v-bind.
- Now it works.

# S2 | Understanding and Using Directives
---
<img src="./assets/02/13.png" alt="missing image" width="800"/>

- binding dynamic data to html attributes
- you will learn to create your own directive

# S2 |  Disable Re-Rendering with v-once
---
<img src="./assets/02/14.png" alt="missing image" width="800"/>

- the title is overriden by sayHello 
- thats why we see Hello twice

`v-once` - Cause the element to render only once and not update when the data changes.
<img src="./assets/02/15.png" alt="missing image" width="800"/> 
<img src="./assets/02/16.png" alt="missing image" width="800"/>

# S2 | How to Output Raw HTML
---
What do you think should be the output ?
<img src="./assets/02/17.png" alt="missing image" width="800"/>

We see the html element in text form
<img src="./assets/02/18.png" alt="missing image" width="800"/>

- this is good and help prevent cross site scri[ting attacks
- by default vuejs escapes html, it does not render html elements. 
- It only renders text

What if we want to render html element ?
We need another directive
`v-html` - This directive tells Vuejs to actually render html code and not escape it.
<img src="./assets/02/19.png" alt="missing image" width="800"/>

- now we see the link

# S2 | Optional: Assignment Starting Code
---
<img src="./assets/02/20.png" alt="missing image" width="800"/>

My Code
<img src="./assets/02/21.png" alt="missing image" width="800"/>

# S1 | Listening to Events
---
`v-on` Directive
<img src="./assets/02/22.png" alt="missing image" width="800"/>

# S2 | Getting Event Data from the Event Object
---
We want to show the co-ordinates
<img src="./assets/02/23.png" alt="missing image" width="800"/>

Event object is passed automatically 
<img src="./assets/02/24.png" alt="missing image" width="800"/>

# S2 | Passing your own Arguments with Events
---
Pass own argument to the Event handler function
<img src="./assets/02/25.png" alt="missing image" width="800"/>

Pass own argument and the event object supplied by Vue
<img src="./assets/02/26.png" alt="missing image" width="800"/>
- note the `$` sign in the `$event` variable passed by Vue
- this is a reserved keyword to pass event in Vuejs

# S2 | Modifying an Event - with Event Modifiers
---
Stop event propagation to the parent element 
<img src="./assets/02/27.png" alt="missing image" width="800"/>
- this handles the event inside the child and stops propagation
- thus the co-ordinates does not update while on the "DEAD SPOT"

Using Event modifiers
<img src="./assets/02/28.png" alt="missing image" width="800"/>
- It does the same thing as above.
- Stops event propagation
- You can think of event modifiers as small functions which gets executed after the event is emitted and before executing your custom event handler function
- here we have nothing as our custom function since we dont want to do anything. 

We can also chain event modifiers 
<img src="./assets/02/29.png" alt="missing image" width="800"/>
- this will also do the job of event.preventDefault()

# S2 | Listening to Keyboard Events
---
Alert on keyup
<img src="./assets/02/30.png" alt="missing image" width="800"/>
- But this alerts whenever we press any key
- But we want to send alert when we hit `ENTER`
- We can add a key modifer for this.

Using Key modifer to restric alert to enter and space
<img src="./assets/02/31.png" alt="missing image" width="800"/>
- Enables us to listen to specific keys 

## Document - Key Modifiers 
https://vuejs.org/v2/guide/events.html#Key-Modifiers

# Assignment-2
---
Arif Code 
<img src="./assets/02/33.png" alt="missing image" width="800"/>
Max Code
<img src="./assets/02/34.png" alt="missing image" width="800"/>

# S2 | Writing JavaScript Code in the Templates
--- 
We can write valid javascript in the templates
<img src="./assets/02/35.png" alt="missing image" width="800"/>
- This is only if its a single expression with no logic etc

Single Expressions
<img src="./assets/02/36.png" alt="missing image" width="800"/>
- We are directly changing the counter property of the vue instance. 

# S2 | Using Two-Way-Binding
---
`v-model` is used to do a two way binding 
<img src="./assets/02/37.png" alt="missing image" width="800"/>
- causes the value of the input to be that of the data stored in Vue instance
- also causes the data in Vue instance to change when the input value changes.


# S2 | Reacting to Changes with Computed Properties
---
`result` depends on  `counter` 
<img src="./assets/02/37.png" alt="missing image" width="800"/>

See how it gets hard when we add another button
<img src="./assets/02/38.png" alt="missing image" width="800"/>
- We have to write the same code again.
- Imagine we have other sources of setting the counter
- This would quickly get unmaintable 
- We need to handle this cross property dependencies

Data is not reactive
<img src="./assets/02/40.png" alt="missing image" width="800"/>
- this wont work !

On way to solve this is 
<img src="./assets/02/41.png" alt="missing image" width="800"/>
- There is a problem 

Imagine we add a third button like so
<img src="./assets/02/42.png" alt="missing image" width="800"/>
- There is a disadvantage
- The `result()` method gets executed whenever a data property changes
- since vue does not know which data proerty is used by result() mothod 

Computed Property in Vue
<img src="./assets/02/43.png" alt="missing image" width="800"/>

Computed Property in Vue
<img src="./assets/02/44.png" alt="missing image" width="800"/>
- Unlike normal method like `result()`, computed properties does not get executed whenever any data changes
- Also computed properties can be treated exactly same as a data property.
- Note: Clicking Increase Second cause executing of the code in method `result()` although it does not depend on it. 
- But the code inside the `ouput` computed property does not get executed.
- computed property caches the values.

# S2 | An Alternative to Computed Properties: Watching for Changes
--- 
Computed Properties - does not do the job sometimes
<img src="./assets/02/46.png" alt="missing image" width="800"/>
- Computed properties always need to run synchronously. We cannot have a asyn code running before returning the computed property, e.g reaching out a server.

Watch property - watches for changes in data and executes code
<img src="./assets/02/45.png" alt="missing image" width="800"/>

Watch property - we can also execute async code unlike co mputed
Lets reset the counter after 2 seconds
<img src="./assets/02/47.png" alt="missing image" width="800"/>
- we need to store the vue instance in `vm` to access the counter inside setTimeout. `var vm = this`
- since when setTimeout would execute, `this` would refer to the window instead of the Vuew instance

Repidly press Increase
<img src="./assets/02/48.png" alt="missing image" width="800"/>

After 2 seconds
<img src="./assets/02/49.png" alt="missing image" width="800"/>
- this happens because of the setTimeout which executes after 2 sec
- whenever the counter changes 
- since its watching for the counter

# S2 | Saving Time with Shorthands
--- 
<img src="./assets/02/50.png" alt="missing image" width="800"/>
<img src="./assets/02/51.png" alt="missing image" width="800"/>

# Assignment-3
---
Arif Code = MAX Code
<img src="./assets/02/52.png" alt="missing image" width="800"/>
- See that the setTimeout executes twice
- 1st - for the change of result due to value reaching 37 
- 2nd due to change of value inside setTimeout itself `vm.value=0` 

# S2 | Dynamic Styling with CSS Classes - Basic
---
Initial Code
<img src="./assets/02/53.png" alt="missing image" width="800"/>

We want to attach the red class only when we click the element and detach it when we click again.
<img src="./assets/02/54.png" alt="missing image" width="800"/>

Switch the attah flag
<img src="./assets/02/55.png" alt="missing image" width="800"/>

Conditionally attach class
<img src="./assets/02/56.png" alt="missing image" width="800"/>

Using Computed property
<img src="./assets/02/57.png" alt="missing image" width="800"/>
- toggle between red and blue when clicking
- the object returned is like `{red : true, blue: false}`
- which means attach class `.red` 
- and do not attach class `.blue`

<img src="./assets/02/58.png" alt="missing image" width="800"/>
- divClass is a computed property 
- which can be used to bind to our class attribute 

# S2 | Dynamic Styling with CSS Classes - Using Names
---
We want to derive which class should be attahced or not

The input field controls the color of the 3rd box  
<img src="./assets/02/60.png" alt="missing image" width="800"/>

You can also attach multiple classes by using array syntax
<img src="./assets/02/61.png" alt="missing image" width="800"/>

# S2 | Setting Styles Dynamically (without CSS Classes
---
Setting style directly
<img src="./assets/02/62.png" alt="missing image" width="800"/>

Setting style by binding to a computed property 
<img src="./assets/02/64.png" alt="missing image" width="800"/>
- The computed property returns an object for the Styling
- We can use this concept to construct a progress bar
- since dynamically changing width is much easier with Vue

# S2 | Styling Elements with the Array Syntax
---
<img src="./assets/02/65.png" alt="missing image" width="800"/>

# S2 | Assignment-4
---
## Arif Solution 
- see the exercise-4 folder

## Max Solution
<img src="./assets/02/66.png" alt="missing image" width="800"/>

### Exercise-1
<img src="./assets/02/67.png" alt="missing image" width="800"/>
<img src="./assets/02/68.png" alt="missing image" width="800"/>
<img src="./assets/02/69.png" alt="missing image" width="800"/>

### Exercise-2
<img src="./assets/02/70.png" alt="missing image" width="800"/>

### Exercise-3
<img src="./assets/02/71.png" alt="missing image" width="800"/>

### Exercise-4
<img src="./assets/02/72.png" alt="missing image" width="800"/>

### Exercise-5
<img src="./assets/02/73.png" alt="missing image" width="800"/>

### Exercise-6
<img src="./assets/02/74.png" alt="missing image" width="800"/>
<img src="./assets/02/75.png" alt="missing image" width="800"/>
<img src="./assets/02/76.png" alt="missing image" width="800"/>
<img src="./assets/02/77.png" alt="missing image" width="800"/>
<img src="./assets/02/78.png" alt="missing image" width="800"/>
<img src="./assets/02/79.png" alt="missing image" width="800"/>

# S2 | Module Resources & Useful Links
## JSFiddle Links:
Getting Started: https://jsfiddle.net/smax/pcjtcmdm/
Template Syntax: https://jsfiddle.net/smax/bkk97b7g/
Events: https://jsfiddle.net/smax/7zdak05g/
Two-Way-Binding: https://jsfiddle.net/smax/ut0tsbcu
Computed Properties & Watch: https://jsfiddle.net/smax/yLjqxmw0/
Dynamic Classes: https://jsfiddle.net/smax/gowg40ym/
Dynamic Styles: https://jsfiddle.net/smax/3rvdLq5y/

## Further Links:
Official Docs - Getting Started: http://vuejs.org/guide/
Official Docs - Template Syntax: http://vuejs.org/guide/syntax.html
Official Docs - Events: http://vuejs.org/guide/events.html
Official Docs - Computed Properties & Watchers: http://vuejs.org/guide/computed.html
Official Docs - Class & Style Binding: http://vuejs.org/guide/class-and-style.html