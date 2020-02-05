# S7 |  An Introduction to Components
# S7 | Module Introduction
---
Reusable pieces 

# S7 | An Introduction to Components
---
Normal Vue instance 
<img src="./assets/07/1.png" alt="missing image" width="800"/>

I want to repeat the server status in various places 
But how ? 
<img src="./assets/07/2.png" alt="missing image" width="800"/>
- this does not render as expected 
- it only renders the app once
- with vue intance like this we only select the first element

App only renders once
<img src="./assets/07/3.png" alt="missing image" width="800"/>

But we want to repeat the section
Component
<img src="./assets/07/4.png" alt="missing image" width="800"/>
- the data in a `Vue.component` must be a function 
- that returns an object with the intended data properties
- otherwise it interferes with the data object of the Vue instance
- which the `Vue.component` extends 

Component in action
<img src="./assets/07/5.png" alt="missing image" width="800"/>

# S7 | Storing Data in Components with the Data Method
---
Two instances with the same data object
<img src="./assets/07/6.png" alt="missing image" width="800"/>
- We are just cheating to understand how data is stored by vue
- Vue js tries to avoid the above situation 
- where the data referred by the 2 instances are the same reference

Cheating
<img src="./assets/07/7.png" alt="missing image" width="800"/>

Cheating
<img src="./assets/07/8.png" alt="missing image" width="800"/>

Clicking change causes both the status to update its status
<img src="./assets/07/9.png" alt="missing image" width="800"/>
- this is the issue with having a shared data object

Returning a new object from the data function solves the issue
<img src="./assets/07/10.png" alt="missing image" width="800"/>
<img src="./assets/07/11.png" alt="missing image" width="800"/>

The component is set up globally - We need to solve this 

# S7 | Registering Components Locally and Globally
---
## My Fiddle 
1. Vue Component Global - https://jsfiddle.net/amuhammadbdimshealth/s6puj7ok/
2. Vue Component Local - https://jsfiddle.net/amuhammadbdimshealth/0me5a9ks/

Components registered globally
<img src="./assets/07/12.png" alt="missing image" width="800"/>
<img src="./assets/07/13.png" alt="missing image" width="800"/>

Vue.component registers the component globally
<img src="./assets/07/14.png" alt="missing image" width="800"/>

Registering component locally by creating variables
<img src="./assets/07/15.png" alt="missing image" width="800"/>

Telling the instance which local components do you have
<img src="./assets/07/16.png" alt="missing image" width="800"/>
- `my-cmp : cmp` - `my-cmp` is the name of the component
- `cpm` is the variable name we define above

We only see the server status in the 1st app
<img src="./assets/07/17.png" alt="missing image" width="800"/>

The 2nd app does not show anything 
<img src="./assets/07/18.png" alt="missing image" width="800"/>
because its not registered

We only registered it in the first vue instance with the `components` property
<img src="./assets/07/19.png" alt="missing image" width="800"/>
- But on the 2nd vue instance this is not recognised 
- since we dont register it there

Recall - REgistering component globally ?
<img src="./assets/07/20.png" alt="missing image" width="800"/>

# S7 | The "Root Component" in the App.vue File
---
Current Code 
<img src="./assets/07/21.png" alt="missing image" width="800"/>

We get the maximum flexibility with the render method
<img src="./assets/07/22.png" alt="missing image" width="800"/>
- instead of `template` this is the best way to write the vue instance
- since template needs to be a string,etc 

Note currently this is not a component. 
<img src="./assets/07/23.png" alt="missing image" width="800"/>
- Its just an object and we are rendering it here

Removing the object would also work
<img src="./assets/07/24.png" alt="missing image" width="800"/>
- as long as we have the template

Providing The `data` property in the `App.vue` file
<img src="./assets/07/25.png" alt="missing image" width="800"/>
- we set it as an object 

Lets see the output
<img src="./assets/07/26.png" alt="missing image" width="800"/>
- error : the data option should be a function

The data property should be a function
<img src="./assets/07/27.png" alt="missing image" width="800"/>

Now the output has no error
<img src="./assets/07/28.png" alt="missing image" width="800"/>

# S7 | Creating a Component
---
Create a component
<img src="./assets/07/29.png" alt="missing image" width="800"/>
- `script` : inside the `script` we are exporting a object
- which behaves like a vue component
- there we will have our data and Methods, etc 
- `template` : we are writing the html 
- `data` - this property should be a function 

How can we use the component   
We can register it globally
<img src="./assets/07/30.png" alt="missing image" width="800"/>
- `app-server-status` : is the selector - we can use it as a selector in the whole application
- `Home` : is the component we defined in `Home.vue` file

`app-server-status` : is the selector - we can use it as a selector in the whole application
So lets try to use it in the `App.vue`
<img src="./assets/07/31.png" alt="missing image" width="800"/>
- But we get an error

The Error
<img src="./assets/07/32.png" alt="missing image" width="800"/>
- Component template should contain exactly one root element

THe problem - 
We cannot have more than one sibling elements
<img src="./assets/07/33.png" alt="missing image" width="800"/>


The solution - wrap all you elements inside on single root element
<img src="./assets/07/34.png" alt="missing image" width="800"/>
- the template wont count since te gets removed at the end 

Output - as expected
<img src="./assets/07/35.png" alt="missing image" width="800"/>

# S6 | Using Components
---
New component - ServerStatus.Vue
<img src="./assets/07/36.png" alt="missing image" width="800"/>
- same setup as the Home.vue

Imagine we have many servers and we want to track the status of all of them separately
- We wont have the previous code in Home.Vue
- Inside Home.Vue we want to loop through all the servers we got 
- For this we need a for loop and also 
- we need access to the ServerStatus Component we have got
<img src="./assets/07/37.png" alt="missing image" width="800"/>

Rename the global component
<img src="./assets/07/38.png" alt="missing image" width="800"/>

`App.vue` - Refer to the new name `app-servers`
<img src="./assets/07/39.png" alt="missing image" width="800"/>

`Home.vue` - registering local components local component and using it in the template
<img src="./assets/07/40.png" alt="missing image" width="800"/>


But we want to loop through all servers
<img src="./assets/07/41.png" alt="missing image" width="800"/>
- but this will cause issues since we cannot have siblings
- we need to wrap them inside a single root element 

Wrap insdie single element
<img src="./assets/07/42.png" alt="missing image" width="800"/>

Output 
<img src="./assets/07/43.png" alt="missing image" width="800"/>

Summary 
- Global Component Resgistration
  - <img src="./assets/07/44.png" alt="missing image" width="800"/>
- Local component Registration
  - <img src="./assets/07/45.png" alt="missing image" width="800"/>
  - <img src="./assets/07/41.png" alt="missing image" width="800"/>

# S6 | Assignment-6 | Time to Practice Components
---
Use Bootstrap
<img src="./assets/07/46.png" alt="missing image" width="800"/>
<img src="./assets/07/47.png" alt="missing image" width="800"/>
<img src="./assets/07/48.png" alt="missing image" width="800"/>
<img src="./assets/07/49.png" alt="missing image" width="800"/>

Tasks
- Take this app and restructure 
- Breat it into components
- So that in the App.Vue file we only use components : the header the footer and so on 
- Try to be very granular
- Register your components globally or locally 

## Assignment Solution
See the downloaded code and compare with your solution `Arif-Code`
<img src="./assets/07/50.png" alt="missing image" width="800"/>

See the screen shots below to get a quick idea of how this was solved
<img src="./assets/07/51.png" alt="missing image" width="800"/>
<img src="./assets/07/52.png" alt="missing image" width="800"/>
<img src="./assets/07/53.png" alt="missing image" width="800"/>
<img src="./assets/07/54.png" alt="missing image" width="800"/>
<img src="./assets/07/55.png" alt="missing image" width="800"/>
<img src="./assets/07/56.png" alt="missing image" width="800"/>

# S6 | Moving to a Better Folder Structure
---
Current Structure 
57

FOr Medium Size Apps
- Components 
58

Another alternative
59
60

For Bigger Apps
- Structure by features 
61

# S6 | How to Name your Component Tags (Selectors)
--- 
Case sensitive ? Yes
62
- since this is a single file template 
- and we are not using the native dom as out template
- like using `template` property or the `el` property

Classical setup
63


Also this works - auto-hiphenated
64
- vue js does it automatically 

Es6 also allows this
65
- where the variable name is only mentioned 
- the tag name is inferred from the variable name
- then vue js does the adjustment behind the scene
- and converts the capital `S` to small `s` while interpreting the tags in the template


# S6 | Scoping Component Styles
--- 
66
67

Opps - everything is red now ! Why ?
68
- reason is we are not scoping the styles
- any style applied in any component will be applied gobally 

We can resolve this using  `scoped` in the syle tag
69
70

Now output is okay
71

Vue js uses default html `data` attribute to uniquely identify doms of different components
72

- see that its using the default html `data` attribute to achieve this
- but where do we use this attribute

Vue js pull up the styles we append in our single files to the head of the document
74
 
Its selecting by div and the attribute
73
75

## Summary 
- This is how it emulates this behavior that our styles are only applied to the elements in a certain component,
- it adds our styles in the head section,it does this always for all our files which is the reason why we have these empty style tags here for the other components, the other files we're using.
- And then for the files where we have scoped added to our style, there it adds this ID to both the selector
and the element in the dom 
- so that now the style is indeed scoped.
- That's something to keep in mind and something to use
- if you want to make sure your styling only gets applied one component.

# S6 | Module Resources & Useful Links
---
The Code used in this Module can be found attached to this Lecture!

If you want to learn more about VueJS Components, you may want to have a look at this Article from the official Docs (important: It does cover Topics which will be taught in the next Course Modules!): http://vuejs.org/guide/components.html

Also see: https://vuejs.org/v2/guide/components-registration.html

