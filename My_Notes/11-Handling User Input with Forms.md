# S11 | Handling User Input with Forms

---

Just test
<img src="./assets/11/13.png" alt="missing image" width="800"/>

# S11 | A Basic `<input>` Form Binding

---

Form - Compolaint
<img src="./assets/11/1.png" alt="missing image" width="800"/>

View your data
<img src="./assets/11/2.png" alt="missing image" width="800"/>

-   Later - This data should be viewed on submit

template
<img src="./assets/11/3.png" alt="missing image" width="800"/>

email
<img src="./assets/11/4.png" alt="missing image" width="800"/>
<img src="./assets/11/5.png" alt="missing image" width="800"/>
<img src="./assets/11/6.png" alt="missing image" width="800"/>

Output
<img src="./assets/11/7.png" alt="missing image" width="800"/>

# S11 | Grouping Data and Pre-Populating Inputs

---

<img src="./assets/11/8.png" alt="missing image" width="800"/>
<img src="./assets/11/9.png" alt="missing image" width="800"/>
<img src="./assets/11/10.png" alt="missing image" width="800"/>
<img src="./assets/11/11.png" alt="missing image" width="800"/>
<img src="./assets/11/13.png" alt="missing image" width="800"/>
<img src="./assets/11/14.png" alt="missing image" width="800"/>
<img src="./assets/11/15.png" alt="missing image" width="800"/>

# S11 | Modifying User Input with Input Modifiers

---

Values updated on each keystroke
<img src="./assets/11/16.png" alt="missing image" width="800"/>
<img src="./assets/11/17.png" alt="missing image" width="800"/>

`v-model.lazy`
<img src="./assets/11/18.png" alt="missing image" width="800"/>

-   I can add the lazy modifier with .lazy,
-   what this will do is that behind the scenes, it will now not listen to the `input` event,so whenever we type something, whenever we enter something new
-   but to the `change` event which is only
    fired once we click somewhere else, once we leave that input.

Other modifiers

1. trim
2. number

# S11 | Binding `<textarea>` and Saving Line Breaks

---

How should we behave with a text area like this one
<img src="./assets/11/19.png" alt="missing image" width="800"/>
<img src="./assets/11/20.png" alt="missing image" width="800"/>

Interpolation between texttarea does not work
<img src="./assets/11/21.png" alt="missing image" width="800"/>
<img src="./assets/11/22.png" alt="missing image" width="800"/>
<img src="./assets/11/23.png" alt="missing image" width="800"/>
<img src="./assets/11/24.png" alt="missing image" width="800"/>
<img src="./assets/11/25.png" alt="missing image" width="800"/>

`white-space: pre` - To keep the multiline string - CSS
<img src="./assets/11/26.png" alt="missing image" width="800"/>
<img src="./assets/11/27.png" alt="missing image" width="800"/>

# S11 | Using Checkboxes and Saving Data in Arrays

---

Objective
<img src="./assets/11/28.png" alt="missing image" width="800"/>
I want to have these checkboxes here hooked up so that we can see if these are checked with true or false and then thereafter, we'll have a look at radio buttons and a dropdown here.

Checkboxes
<img src="./assets/11/29.png" alt="missing image" width="800"/>

-   We Want to store the checked values in an array

sendMail - array
<img src="./assets/11/30.png" alt="missing image" width="800"/>

Binding 2 inputs to the same model
<img src="./assets/11/31.png" alt="missing image" width="800"/>

-   vue js will automatically Merge the value of these checkboxes into the single array sendMail

Seeing the values in the sendMail - looping
<img src="./assets/11/32.png" alt="missing image" width="800"/>

Output
<img src="./assets/11/33.png" alt="missing image" width="800"/>

# S11 | Using Radio Buttons

---

<img src="./assets/11/34.png" alt="missing image" width="800"/>
So right now it's not working correctly.So we want to ensure that we can only select one and then that we store the value of the selected radio button in some property, let's use vuejs to help us there.

Data property
<img src="./assets/11/35.png" alt="missing image" width="800"/>

Template - radio button
<img src="./assets/11/36.png" alt="missing image" width="800"/>

Binding to the property
<img src="./assets/11/37.png" alt="missing image" width="800"/>

-   binding to a single property
-   vue js now knows that these radio buttons belongs to the same group
-   so now we can only select one option

Single option
<img src="./assets/11/38.png" alt="missing image" width="800"/>

Output
<img src="./assets/11/39.png" alt="missing image" width="800"/>
<img src="./assets/11/40.png" alt="missing image" width="800"/>

# S11 | Handling Dropdowns with `<select> and <option>`

---

Dropdown
<img src="./assets/11/41.png" alt="missing image" width="800"/>

-   I want to add options dynamically. Thats why its empty

**Objectives**
I want to do two things, I of course want to use vuejs to get the value but I also want vuejs to populate this select, this dropdown with options. You see right now,

Data property - priiorities
<img src="./assets/11/42.png" alt="missing image" width="800"/>

Looping
<img src="./assets/11/43.png" alt="missing image" width="800"/>
<img src="./assets/11/44.png" alt="missing image" width="800"/>

Output
<img src="./assets/11/45.png" alt="missing image" width="800"/>

Selecting a default option
<img src="./assets/11/46.png" alt="missing image" width="800"/>
<img src="./assets/11/47.png" alt="missing image" width="800"/>

How do I bind the selected option
<img src="./assets/11/48.png" alt="missing image" width="800"/>
<img src="./assets/11/49.png" alt="missing image" width="800"/>

Why High is selected by default ?
<img src="./assets/11/50.png" alt="missing image" width="800"/>

-   this is decided by the model we bind to.
-   selected only works when we are not prepopulting use vue model

Remove the selecedted property
<img src="./assets/11/51.png" alt="missing image" width="800"/>
<img src="./assets/11/52.png" alt="missing image" width="800"/>

Output
<img src="./assets/11/53.png" alt="missing image" width="800"/>
<img src="./assets/11/54.png" alt="missing image" width="800"/>

# S11 | What v-model does and How to Create a Custom Control

---

**Objective**
I want to build a little switch which I can toggle between on and off and to do this, I will build my own component which has this logic in it,

**v-model - behind the scenes**
How does the v-model works behind the scene
Lets do this manually
<img src="./assets/11/55.png" alt="missing image" width="800"/>

-   Now that we know how v-model works behind the scenes, we know how our own component has to work to be able to be usable with v-model,
-   it has to have a prop named value so that v-model is able to pass a value into our component
-   and it has to emit an event called input to allow v-model to react to that. Well with these two information pieces, we can create our own component,

Switch - Our Own Component
<img src="./assets/11/56.png" alt="missing image" width="800"/>

# S11 | Creating a Custom Control (Input)

---

## Setup

Switch.vue
<img src="./assets/11/57.png" alt="missing image" width="800"/>
<img src="./assets/11/58.png" alt="missing image" width="800"/>
<img src="./assets/11/59.png" alt="missing image" width="800"/>

App.vue
<img src="./assets/11/60.png" alt="missing image" width="800"/>
<img src="./assets/11/61.png" alt="missing image" width="800"/>
<img src="./assets/11/62.png" alt="missing image" width="800"/>

## Lets make it work

<img src="./assets/11/63.png" alt="missing image" width="800"/>
<img src="./assets/11/64.png" alt="missing image" width="800"/>
<img src="./assets/11/65.png" alt="missing image" width="800"/>

remove `IsOn`
<img src="./assets/11/66.png" alt="missing image" width="800"/>

Use the value prop passed from outside
<img src="./assets/11/67.png" alt="missing image" width="800"/>

-   the value prop is passsed from outside but now its changable from inside.

Now we also need to submit an event
<img src="./assets/11/68.png" alt="missing image" width="800"/>

-   on click call switched
-   emit an event from the switcherd method
-   the event must be `input` so that v-model is able to function properly

Output the dataswitch property which is bound to the custom component
<img src="./assets/11/69.png" alt="missing image" width="800"/>
<img src="./assets/11/70.png" alt="missing image" width="800"/>
<img src="./assets/11/71.png" alt="missing image" width="800"/>

-   we build our own control

# S11 | Submitting a Form

---

Prevent the default behaviour of a button in a form
<img src="./assets/11/72.png" alt="missing image" width="800"/>
<img src="./assets/11/73.png" alt="missing image" width="800"/>

-   prevent modifier.
-   prevent request being sent to the server
-   we want to handle it through vuejs

<img src="./assets/11/74.png" alt="missing image" width="800"/>
<img src="./assets/11/75.png" alt="missing image" width="800"/>

-   use this property to show or not show the data panel

<img src="./assets/11/76.png" alt="missing image" width="800"/>

`v-if`
<img src="./assets/11/77.png" alt="missing image" width="800"/>

-   we can handle our data in the submitted method

# S11 | Assignment 9: Time to Practice - Forms

---

<img src="./assets/11/78.png" alt="missing image" width="800"/>
