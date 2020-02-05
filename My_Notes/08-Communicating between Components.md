# S8 | Communicating between Components
---
# S8 | Module Introduction
---
Communicating between components
<img src="./assets/08/1.png" alt="missing image" width="800"/>

# S8 | Communication Problems
---
## The setup 
<img src="./assets/08/2.png" alt="missing image" width="800"/>
<img src="./assets/08/3.png" alt="missing image" width="800"/>
<img src="./assets/08/4.png" alt="missing image" width="800"/>

## What we want to do ?
I want to send data from the parent to the child 
<img src="./assets/08/5.png" alt="missing image" width="800"/>

I want to pass data from the User component to the User detail component when a button is clicked
<img src="./assets/08/6.png" alt="missing image" width="800"/>

Button
<img src="./assets/08/7.png" alt="missing image" width="800"/>

Method
<img src="./assets/08/8.png" alt="missing image" width="800"/>

I want to output this name in the User detail component not in the User component
<img src="./assets/08/9.png" alt="missing image" width="800"/>
<img src="./assets/08/10.png" alt="missing image" width="800"/>
- how do we get the name value from the other component i.e The User Componentf

# S8 | Using Props for Parent => Child Communication
---
We use props to pass the data from paranet component to the child component
<img src="./assets/08/11.png" alt="missing image" width="800"/>
- mention the name of the property you will receive from outside
- the variable name in the props array should match the variable name in the template used in interpolation or otherwise
- we can treat this as a propery in our data object
- but this time it will be passed from outside

Pass the `name` from the parent
<img src="./assets/08/12.png" alt="missing image" width="800"/>
<img src="./assets/08/13.png" alt="missing image" width="800"/>
<img src="./assets/08/14.png" alt="missing image" width="800"/>

But its not dynamic 
What if I pass `name` that is in the data property ?
<img src="./assets/08/15.png" alt="missing image" width="800"/>
<img src="./assets/08/16.png" alt="missing image" width="800"/>
- it does not work. It Prints the string `name` 
- and not the value stored by name 

To make it dynamic use v-bind / the colon 
<img src="./assets/08/17.png" alt="missing image" width="800"/>
<img src="./assets/08/18.png" alt="missing image" width="800"/>

Output
<img src="./assets/08/19.png" alt="missing image" width="800"/>
<img src="./assets/08/20.png" alt="missing image" width="800"/>

# S8 | Naming "props"
---
We can have case sensitive Names because we are using single file template since this is the best solution
<img src="./assets/08/21.png" alt="missing image" width="800"/>

WE could not do this in case of other templates because of the case insensitive restriction of the DOM

# S8 | Using "props" in the Child Component
---
Using props in the child component
<img src="./assets/08/22.png" alt="missing image" width="800"/>
- we can access it in the methods of the child like we can any data property within the component
- use `this` to access the prop

Output - works
<img src="./assets/08/23.png" alt="missing image" width="800"/>

# S8 | Validating "props"
---
Passing invalid value as props
Passing number - which cannot be split
<img src="./assets/08/24.png" alt="missing image" width="800"/>

Breaks the app
<img src="./assets/08/25.png" alt="missing image" width="800"/>

To prevent this we want to validate the props coming in
If you want to validate a prop, it needs to be an object
<img src="./assets/08/26.png" alt="missing image" width="800"/>
- Mention the type of the prop that is expected
- here its expecting a single type `string`
  
We can also expect mutiple data type for a Prop by passing an array of types
<img src="./assets/08/27.png" alt="missing image" width="800"/>

With validation
<img src="./assets/08/28.png" alt="missing image" width="800"/>
- we get a warning at development time

We can set other validations / restriction forr the Props
<img src="./assets/08/29.png" alt="missing image" width="800"/>
<img src="./assets/08/30.png" alt="missing image" width="800"/>
- required, type, default

For obejct types like object, arrays
We need to define a function in the default 
For primitive types we can directly set the value we want to use
<img src="./assets/08/31.png" alt="missing image" width="800"/>

# S8 | Using Custom Events for Child => Parent Communication
---
WE want to inform the parent something from the child
<img src="./assets/08/32.png" alt="missing image" width="800"/>

Child = UserDetail
<img src="./assets/08/33.png" alt="missing image" width="800"/>
- a button to reset the name 
- see that its a child component

reset name method
<img src="./assets/08/34.png" alt="missing image" width="800"/>
- keep in mind the concept of reference type and primitive type
- this is a string which is passed by value
- in case of reference types Like object and arrays changing props like this in the child would also change the value in the parent 
- since reference type means only the address of the actual variable hass been pass as the props not the value itself.

Output
Now
<img src="./assets/08/35.png" alt="missing image" width="800"/>

Change name
<img src="./assets/08/36.png" alt="missing image" width="800"/>

Reset name
<img src="./assets/08/37.png" alt="missing image" width="800"/>

But the change does not affect the parent
Clicking on Change name does not work 
<img src="./assets/08/38.png" alt="missing image" width="800"/>
- in the parent component the name is still Anna
- since we changed it in the Child component only
- we need to inform the parent component that the name did really change.
- to do that we will need to emit a custom event

`$emit` function - its built in 
<img src="./assets/08/39.png" alt="missing image" width="800"/>
- allows us to emit a custom event

Arguments of `$emit`
<img src="./assets/08/40.png" alt="missing image" width="800"/>
- Name of the event 
- Data we want to pass

In the parent componet (`User.vue`) we can listen to that event like any other event 
<img src="./assets/08/41.png" alt="missing image" width="800"/>
- using the `v-on` / `@`
- we can execute a method here 
- or we can execute a statement 

Statement executed in the Parent (`User.vue`) when event fired
<img src="./assets/08/42.png" alt="missing image" width="800"/>
<img src="./assets/08/43.png" alt="missing image" width="800"/>
- the name refers to the data property 
- `$event` refers to the data passed through the event

Recall - Data passed through the event 
<img src="./assets/08/44.png" alt="missing image" width="800"/>

Now the output is as expected
- the name can be changed from the parent after resetting from the child
- since the parent (User component) data property was changed using the event

Lets test how this happens 
<img src="./assets/08/45.png" alt="missing image" width="800"/>
- Add the name in template

Output - Now
<img src="./assets/08/46.png" alt="missing image" width="800"/>
<img src="./assets/08/47.png" alt="missing image" width="800"/>
<img src="./assets/08/48.png" alt="missing image" width="800"/>

Output - before we emitted the event to change the parent data
<img src="./assets/08/49.png" alt="missing image" width="800"/>
<img src="./assets/08/50.png" alt="missing image" width="800"/>
<img src="./assets/08/51.png" alt="missing image" width="800"/>
<img src="./assets/08/52.png" alt="missing image" width="800"/>

# S8 |  Understanding Unidirectional Data Flow
---
Child to Child direct communication is not allowed
<img src="./assets/08/53.png" alt="missing image" width="800"/>
- its unidirectional data flow
- data can move from a pratent => children
- or from children => parent
- not from child => child

THen how do we pass data from child => child ? 
<img src="./assets/08/54.png" alt="missing image" width="800"/>
- using the parent as the intermediate

# S8 |  Communicating with Callback Functions
---
Recall the child component
`UserDetail.vue`
<img src="./assets/08/56.png" alt="missing image" width="800"/>

Parent Component
`User.vue`
<img src="./assets/08/55.png" alt="missing image" width="800"/>
- Defining resetName in the parent component 
- same method name as the child component 

Pass a prop `resetFn` to the child 
<img src="./assets/08/57.png" alt="missing image" width="800"/>
- this is pointing to the resetName function we just created on the parent

Set up a new prop in the user detail
<img src="./assets/08/58.png" alt="missing image" width="800"/>
- `resetFn`
- type will be Function 

New Button to execute the new function pass as prop
<img src="./assets/08/59.png" alt="missing image" width="800"/>
- its an alternative to using custom event
- its like React
- Notice the `()` first bracket whicle registering the function for the click event.

This now also reset the name but without using a custom event
<img src="./assets/08/60.png" alt="missing image" width="800"/>

## Summary 
- So that's one addition on how to communicate between parent and child,
- you can do it with props and custom event or with props and passing a callback as a prop which actually executes a method in the parent
- but now by passing it as a prop makes it executable from the child.

# S8 |  Communication between Sibling Components
---
Getting Data from one child to another one
<img src="./assets/08/61.png" alt="missing image" width="800"/>

How can we do this ? We have 3 ways of doing so

## Method-1 
Child component 
`UserEdit.vue`
<img src="./assets/08/62.png" alt="missing image" width="800"/>
- define a method `editAge`
- have a button which when clicked executes this method
- but we do not have an `age` data yet

Store the age in the parent component
`User.vue`
<img src="./assets/08/63.png" alt="missing image" width="800"/>

Pass the age from the parent to the child (UserEdit) as a prop `userAge`
<img src="./assets/08/64.png" alt="missing image" width="800"/>

Define the prop in the Child
`UserEdit.vue`
<img src="./assets/08/65.png" alt="missing image" width="800"/>
- `userAge`

We want to pass the `userAge` as props to the Child (UserDetail) as well
<img src="./assets/08/66.png" alt="missing image" width="800"/>

Let define the prop in the Child
`UserDetail.vue`
<img src="./assets/08/67.png" alt="missing image" width="800"/>
- type = NUmber
- here we want to get the update from the UserEdit component 
- which is a sibling

Lets try to see it in action
<img src="./assets/08/68.png" alt="missing image" width="800"/>

Lets show the userAge in the UserEdit.vue (Child) component as well
<img src="./assets/08/70.png" alt="missing image" width="800"/>

Output
Initial - After Reload
<img src="./assets/08/71.png" alt="missing image" width="800"/>

Clicking Edit Age in the User Edit changes the age in the User Edit component but not in the User Detail component
<img src="./assets/08/72.png" alt="missing image" width="800"/>
- this is because its only happening within the User Edit component 
- we are not passing the age back to the parent component

But how do we pass the age to the child sibling
Emit a custom event `ageWasEdited`
<img src="./assets/08/73.png" alt="missing image" width="800"/>

Listen for the event in the Parent 
`User.vue`
<img src="./assets/08/74.png" alt="missing image" width="800"/>

Output - Method-1
<img src="./assets/08/75.png" alt="missing image" width="800"/>
<img src="./assets/08/76.png" alt="missing image" width="800"/>

#### Method-1 - Summary 
- We have the age set up in the user component and we pass it as a prop to both the user detail and user
edit component, thereafter we change it in the user edit component and we emit a custom event back to the user component. There we with that event, we listened on this event or we listened to this event and once the event is executed or happens, we update the age in the user component hence passing the new value down as a property to all components which use this property again, therefore also updating it in the user detailed component.

## Method-2 
Passing the callback approach 
Not showing here 

## Method-3 (You might be looking for this)
- Both methods 1 and method 2 can get clumsy in times when we have a big chain of nested parent => child setup
- We can use Event bus for this 
- So its a kind of an object serving as a place to listen to events and passing data on.

Let's see how that would work.

# S8 | Using an Event Bus for Communication
---
## Concept
- The third method I want to show is using a central class or object to pass the data.
- If you're coming from Angular 2, you might know this as services, 
- this would also be a central part of the app you can check in places where you need it which holds some task or methods you want to use in your whole application,
that's basically what we're using now. 

## How ? 
#### 1. Create a new vue Instance 
`main.js`
<img src="./assets/08/77.png" alt="missing image" width="800"/>
- you can name it other than `eventBus`

Import the eventBus in the child component
`UserEdit.vue`
<img src="./assets/08/78.png" alt="missing image" width="800"/>

emit using `eventBus`
`UserEdit.vue`
<img src="./assets/08/79.png" alt="missing image" width="800"/>
<img src="./assets/08/80.png" alt="missing image" width="800"/>
- same argument as `$emit` we used before
- but this event is not emitted on the child Instance
- rather its emitted on the `eventBus`

We want to register a listener in the sibling component when its being created 
`UserDetail.vue`
<img src="./assets/08/81.png" alt="missing image" width="800"/>
- this is a life cycle hook 
- which gets executed on component creation
- we are using an es6 syntax here

Import `eventtBus`
`UserDetail.vue`
<img src="./assets/08/82.png" alt="missing image" width="800"/>

Register the listener
<img src="./assets/08/83.png" alt="missing image" width="800"/>
- this will now listen to events on this vue instance 
- that we created in `main.js` 
- that is the `eventBus`

Listen for the `ageWasEdited` event 
<img src="./assets/08/84.png" alt="missing image" width="800"/>
- using the `eventBus.$on()` method 
- `ageWasEdited` event was fired from the sibling `UserEdit.vue` component. Remember!
- 2nd argument of the `eventBus.$on()` method is the callback
- that we want to executed on this event occurs
- this callback always gets the data we passed with the event passed as an argument (`age`)

Data
<img src="./assets/08/85.png" alt="missing image" width="800"/>

SideNote 
- The order of eventBus creation and the application Vue instance is important.
- THe eventBus should be created first.
- <img src="./assets/08/86.png" alt="missing image" width="800"/>

Output
<img src="./assets/08/87.png" alt="missing image" width="800"/>
<img src="./assets/08/88.png" alt="missing image" width="800"/>
- The important thing is "Its not taking the route over the `User.vue` Component (Parent)"

Lets prove this by printing `age` in the User component
<img src="./assets/08/89.png" alt="missing image" width="800"/>
<img src="./assets/08/90.png" alt="missing image" width="800"/>
<img src="./assets/08/91.png" alt="missing image" width="800"/>
- age stays 27 in the User component after clicking Edit Age in the child component
- it did not change 
- This is how you can implement a communication between children without having to take the route using the parent.

## Note
This can also get complicated at times.
Managing multiple state of properties in the application at different places
Vue provides a simpler solution to this state management - **VueEx**.

# S8 | Centralizing Code in an Event Bus
---
Having the emit logic in the eventBus
<img src="./assets/08/92.png" alt="missing image" width="800"/>

use the eventBus custom method to emit
`UserEdit.vue`
<img src="./assets/08/93.png" alt="missing image" width="800"/>
<img src="./assets/08/94.png" alt="missing image" width="800"/>
- Still works as before
- Thus you can use eventBus concept to store some centralised code 
- that you want to access from different places in your app

You can also have centralised data properties
<img src="./assets/08/95.png" alt="missing image" width="800"/>
- data will be an object and not a function
- since this is a vue instance and not a component

# S8 | Assignment: Time to Practice - Component Communication
---
<img src="./assets/08/96.png" alt="missing image" width="800"/>
<img src="./assets/08/97.png" alt="missing image" width="800"/>

1. Create a new component called servers 
2. Loop over the list of servers 
3. Pass the id and server status to the server component
4. When you click a server, load the server detail using the ServerDetails component
5. In the SErver details component there would be a button which when clicked will change the status of the server back to normal

## Assignment Solution
#### 1. Create a new component called servers
#### 2. Loop over the list of servers
#### 3. Pass the id and server status to the server component
<img src="./assets/08/98.png" alt="missing image" width="800"/>
<img src="./assets/08/99.png" alt="missing image" width="800"/>
<img src="./assets/08/100.png" alt="missing image" width="800"/>
<img src="./assets/08/101.png" alt="missing image" width="800"/>
<img src="./assets/08/102.png" alt="missing image" width="800"/>
<img src="./assets/08/103.png" alt="missing image" width="800"/>

#### 4. When you click a server, load the server detail using the ServerDetails component
<img src="./assets/08/104.png" alt="missing image" width="800"/>
<img src="./assets/08/105.png" alt="missing image" width="800"/>
<img src="./assets/08/106.png" alt="missing image" width="800"/>
<img src="./assets/08/107.png" alt="missing image" width="800"/>
<img src="./assets/08/108.png" alt="missing image" width="800"/>
<img src="./assets/08/109.png" alt="missing image" width="800"/>
<img src="./assets/08/110.png" alt="missing image" width="800"/>
<img src="./assets/08/111.png" alt="missing image" width="800"/>
<img src="./assets/08/112.png" alt="missing image" width="800"/>
<img src="./assets/08/113.png" alt="missing image" width="800"/>

#### 5. In the Server details component there would be a button which when clicked will change the status of the server back to normal
<img src="./assets/08/114.png" alt="missing image" width="800"/>
<img src="./assets/08/115.png" alt="missing image" width="800"/>

- the server status edited here is the same server passed from the parent
- since object is a reference type
- object => {id: 1, status: "Normal"} => this is reference type
- thus we do not have to pass back the server to the parent and edit the status using $emit/eventbus/callback.

# S8 | Module Resources & Useful Links
The full source code can be found attached.

Useful Links:

Official Docs - Props: http://vuejs.org/guide/components.html#Props
Official Docs - Custom Events: http://vuejs.org/guide/components.html#Custom-Events
Official Docs - Non-Parent-Child Communication: http://vuejs.org/guide/components.html#Non-Parent-Child-Communication