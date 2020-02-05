# S9 | Advanced Component Usage
---
# S9 | Setting up the Module Project
---
<img src="./assets/09/1.png" alt="missing image" width="800"/>
<img src="./assets/09/2.png" alt="missing image" width="800"/>
<img src="./assets/09/3.png" alt="missing image" width="800"/>
<img src="./assets/09/4.png" alt="missing image" width="800"/>
<img src="./assets/09/5.png" alt="missing image" width="800"/>

# S9 | Passing Content - The Suboptimal Solution
---
Passing props
<img src="./assets/09/6.png" alt="missing image" width="800"/>

Output the prop
<img src="./assets/09/7.png" alt="missing image" width="800"/>

Output
<img src="./assets/09/8.png" alt="missing image" width="800"/>

WHat if we want to pass an html to the Quote component ? 
Would the below approach be good if it works ? 
<img src="./assets/09/9.png" alt="missing image" width="800"/>

But that does not work
<img src="./assets/09/10.png" alt="missing image" width="800"/>

## Slots
Well we can change this with a concept called slots,
vuejs offers us slots we can reserve for content being passed from outside.

# S9 | Passing Content with Slots
---
In the child component where I want to recieve data I add Slot
<img src="./assets/09/11.png" alt="missing image" width="800"/>

Output - now it renders using slot
<img src="./assets/09/12.png" alt="missing image" width="800"/>

This is now what this slot does which allows us to pass in data from outside and render it in the child component.

# S9 | How Slot Content gets Compiled and Styled
---
Do you think that this would change the styling of the slot content ? 
<img src="./assets/09/13.png" alt="missing image" width="800"/>

Yes
<img src="./assets/09/14.png" alt="missing image" width="800"/>
- So the **child** component styling is applied to the data being passed in from outside using `slot`, that's the first key take away.
- The slot is not style in the parent component from where it is actually passed
- its styled in the destination/child component
- Its similar to the props.child in React 


What if we want the quote to be dynamic and dependant on the parent component data object like this
<img src="./assets/09/15.png" alt="missing image" width="800"/>
<img src="./assets/09/16.png" alt="missing image" width="800"/>
- Do you think this will work ?

Yes . It works
<img src="./assets/09/17.png" alt="missing image" width="800"/>
- So for compiling the template which means rendering any kind of vuejs operation we're doing here,
- the styling is something different but for anything else
- the component where you actually have the code in the template will be the one doing the changes.
- So here the app component or the app root instance of vuejs here is the one doing the changes
- because even though we pass it to the child component, it is in this components template that we use in the first place.

## Concept
**So that's the difference,**
the styling is setup on the child component, everything else is handled on the parent component and this scope of compilation compared to the styling

## Changed Slot Styling Behavior
In the last lecture, I showed you how slots are compiled and styled. 

The compilation information still is correct but regarding the styling, the behavior changed: You can now style the content you pass into a slot from inside the parent component.

When adding the h1  style to the parent component in the last video, you will now get red text in your final output. This is indeed pretty useful, since it allows you to write wrapper components which only provide a certain frame but don't interfere with the styling of the data/ content you pass into them.

# S9 | Using Multiple Slots (Named Slots)
---
How can we achieve multiple slots
<img src="./assets/09/18.png" alt="missing image" width="800"/>

Output - we have it twice
<img src="./assets/09/19.png" alt="missing image" width="800"/>

But I want the h2 in the first slot and the p in the 2nd slot
How can we achieve this ? 
<img src="./assets/09/20.png" alt="missing image" width="800"/>

We can setup namd slots 
<img src="./assets/09/21.png" alt="missing image" width="800"/>

Connect the named slot in parent to the corressponding child component with the same name
<img src="./assets/09/22.png" alt="missing image" width="800"/>
<img src="./assets/09/23.png" alt="missing image" width="800"/>

Output
<img src="./assets/09/24.png" alt="missing image" width="800"/>
- It distributes our content in two different slots and we tell it how to distribute it by setting up names.

# S9 | Default Slots and Slot Defaults
---
Default Slot
<img src="./assets/09/25.png" alt="missing image" width="800"/>
<img src="./assets/09/26.png" alt="missing image" width="800"/>
<img src="./assets/09/27.png" alt="missing image" width="800"/>
- Vuejs will treat the unnamed slot as the default slot
- So the paragraph for example which doesn't have a name slot assigned to it, such content will automatically be rendered in the default slot.
- So saving this will yield us the same result as before simply by taking advantage of vuejs default behavior which renders unassigned content in the default slot here.

Default content for slot when nothing is passed from the parent
<img src="./assets/09/28.png" alt="missing image" width="800"/>
- The text inside the open and closing tag (The Subtitle) will get replaced if a content is passed from the parent component

# S8 | A Summary on Slots
---
Slots help you to distribute your content in other components.

# S8 | Switching Multiple Components with Dynamic Components
---
The distinct child components
<img src="./assets/09/29.png" alt="missing image" width="800"/>
<img src="./assets/09/30.png" alt="missing image" width="800"/>
<img src="./assets/09/31.png" alt="missing image" width="800"/>
<img src="./assets/09/32.png" alt="missing image" width="800"/>

Now I want to dynamically decide which one to display here (highlighted) depending on which button was pressed
<img src="./assets/09/33.png" alt="missing image" width="800"/>
<img src="./assets/09/34.png" alt="missing image" width="800"/>

To make this happen lets define the selectedComponent property
<img src="./assets/09/35.png" alt="missing image" width="800"/>
- this will be the default component = `appQuote`

Define Event handlers
<img src="./assets/09/36.png" alt="missing image" width="800"/>
<img src="./assets/09/37.png" alt="missing image" width="800"/>
<img src="./assets/09/38.png" alt="missing image" width="800"/>

Lets introduce - Dynamic Component
<img src="./assets/09/39.png" alt="missing image" width="800"/>
- `component` is a reserved tag in vue js
- `component` allows us to dynamically add components

The `:is` attribute - is used to bind the component dynamically to a data property
<img src="./assets/09/40.png" alt="missing image" width="800"/>
<img src="./assets/09/41.png" alt="missing image" width="800"/>

The string `appQuote` stored in `selectedComponent` is regarded as the selector of the component which now should get loaded dynamically.

Output
<img src="./assets/09/42.png" alt="missing image" width="800"/>
- Nothing there since we dont pass any content to the component property

Default Content
<img src="./assets/09/43.png" alt="missing image" width="800"/>
<img src="./assets/09/44.png" alt="missing image" width="800"/>

Output
<img src="./assets/09/45.png" alt="missing image" width="800"/>
<img src="./assets/09/46.png" alt="missing image" width="800"/>
<img src="./assets/09/47.png" alt="missing image" width="800"/>


## Summary
This is how we can use dynamic components to dynamically replace a part in our template with different components triggered by for example button clicks and stored in a property which is bound with the is keyword here.


# S9 | Understanding Dynamic Component Behavior
---
One important question when using this dynamic component approach is, is the component actually recreated when it gets loaded
or do we use an existing instance?

- So for example here, when I reload the app, we have the `quote` component by default,now I go to `author`, this component is obviously create brand new now. 
<img src="./assets/09/48.png" alt="missing image" width="800"/>
<img src="./assets/09/49.png" alt="missing image" width="800"/>

- What if I go back to `quote`, was this component now also now created newly or do we take the existing one?
- LEts check this 
<img src="./assets/09/50.png" alt="missing image" width="800"/>
- If the counter starts over from 0 if switching pages/components by clicking the button then the components should have been recreated 
- otherwise the components stays alive
<img src="./assets/09/51.png" alt="missing image" width="800"/>
<img src="./assets/09/52.png" alt="missing image" width="800"/>
<img src="./assets/09/53.png" alt="missing image" width="800"/>
- The counter starts again from 0 
-Thus The component gets destroyed and recreated 

We could check the same with lifecycle hooks
<img src="./assets/09/54.png" alt="missing image" width="800"/>
<img src="./assets/09/55.png" alt="missing image" width="800"/>
- So the New component dies 
- We can override this behaviour 

# S9 | Keeping Dynamic Components Alive
---
`keep-alive` reserved component keeps the component alive
<img src="./assets/09/56.png" alt="missing image" width="800"/>

Switching from `New` to `Author` does not cause `New` to be destroyed
The counter keeps its values. `Destroyed` life cycle hook is not called 
<img src="./assets/09/57.png" alt="missing image" width="800"/>
- this preserves the state 

## Question - What is the alternate to using `destroyed` life cycle hook ?
- But now you would correctly say well maybe I want to react to the fact that I navigate away.
- before we could use the destroyed lifecycle 
- but now that's no longer called. 
- Do we have our lifecycle hooks we can use?Let's have a look at the next video.


# S9 | Dynamic Component Lifecycle Hooks
---
What if we wanted to react to the navigating away so that another component gets loaded? 

## Two other Hooks - `activated & deactivated`
- We do have two lifecycle hooks to control if a dynamic component 
- is currently visited, so if it was `activated`
- or if we navigate it away, so if it was `deactivated`
- and that were the two names of these lifecycle hooks.
<img src="./assets/09/58.png" alt="missing image" width="800"/>

Clicking on New causes the `activated` hook to be called
<img src="./assets/09/59.png" alt="missing image" width="800"/>

Clicking on author causes the `deactivated` hook to fire for the New component
<img src="./assets/09/60.png" alt="missing image" width="800"/>

# S9 | Assignment: Time to Practice - Slots and Dynamic Components
---
1. Pass content to the components blue, green, red between the opening and closing selectors, not as a prop. The content can be the same.

2. Dynamically switching components - 
   - Hook up the buttons to switch components.
   - Use slots and dynamic component you should be able to do that 


## Assignment-Solution

#### Concepts - Slot vs Props
Sometimes, the concept of slots gets confused with the idea behind props. Keep in mind: slots allow you to directly distribute some content in the child component's template. You pass the content between the opening and closing selector of that component.

Example:

```html
<child-component>
    <h1>This header will be rendered in the Child Component (if it offers a slot)
</child-component>
```

Props on the other hand allow you to pass data to a child component where it then is available as a property. You can output it in the child component's template (via {‌{ }}  or v-bind ) but you can also use it in the JS code of the child component. That's not (easily) possible with slots.

Example:

```html
<child-component :userId="1"></child-component>
// In child component
props: ['userId'] // => Use as a normal property
```

#### Solution Snaphots
<img src="./assets/09/61.png" alt="missing image" width="800"/>
<img src="./assets/09/62.png" alt="missing image" width="800"/>
<img src="./assets/09/63.png" alt="missing image" width="800"/>
<img src="./assets/09/64.png" alt="missing image" width="800"/>
<img src="./assets/09/65.png" alt="missing image" width="800"/>
<img src="./assets/09/66.png" alt="missing image" width="800"/>
<img src="./assets/09/67.png" alt="missing image" width="800"/>
<img src="./assets/09/68.png" alt="missing image" width="800"/>
<img src="./assets/09/69.png" alt="missing image" width="800"/>
<img src="./assets/09/70.png" alt="missing image" width="800"/>
<img src="./assets/09/71.png" alt="missing image" width="800"/>


# S9 | Module Resources & Helpful Links
--- 

You can find the Module Source Code attached to this Lecture.

Helpful Links:

Official Docs - Slots: http://vuejs.org/guide/components.html#Content-Distribution-with-Slots
Official Docs - Dynamic Components: http://vuejs.org/guide/components.html#Dynamic-Components
Official Docs - Misc: http://vuejs.org/guide/components.html#Misc