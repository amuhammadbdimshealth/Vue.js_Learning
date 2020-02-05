# 10 | Second Course Project - Wonderful Quotes

---

# S9 | Module Introduction

---

1. Add Quotes
    1. Progress Bar Updates
    2. Once 10 quotes reached show an alert
2. Delete Quotes
    1. Click on a quote to delete
    2. Update progress bar

<img src="./assets/10/1.png" alt="missing image" width="800"/>
<img src="./assets/10/2.png" alt="missing image" width="800"/>
<img src="./assets/10/3.png" alt="missing image" width="800"/>
<img src="./assets/10/4.png" alt="missing image" width="800"/>

# S9 | Initializing the Application

---

<img src="./assets/10/5.png" alt="missing image" width="800"/>
<img src="./assets/10/6.png" alt="missing image" width="800"/>

# S9 | Creating the Application Components

---

<img src="./assets/10/7.png" alt="missing image" width="800"/>
<img src="./assets/10/8.png" alt="missing image" width="800"/>

Using slots
<img src="./assets/10/9.png" alt="missing image" width="800"/>

-   the content should come from outside

# S9 | Passing Data with Props and Slots

---

<img src="./assets/10/10.png" alt="missing image" width="800"/>
<img src="./assets/10/11.png" alt="missing image" width="800"/>
<img src="./assets/10/12.png" alt="missing image" width="800"/>

# S9 | Allowing Users to Create Quotes with a NewQuote Component

---

<img src="./assets/10/13.png" alt="missing image" width="800"/>

Prevent modifier
<img src="./assets/10/14.png" alt="missing image" width="800"/>
<img src="./assets/10/15.png" alt="missing image" width="800"/>
<img src="./assets/10/16.png" alt="missing image" width="800"/>

# S9 | Adding Quotes with Custom Events

---

<img src="./assets/10/17.png" alt="missing image" width="800"/>
<img src="./assets/10/18.png" alt="missing image" width="800"/>
<img src="./assets/10/19.png" alt="missing image" width="800"/>
<img src="./assets/10/20.png" alt="missing image" width="800"/>
<img src="./assets/10/21.png" alt="missing image" width="800"/>

# S9 | Adding a Info Box

---

<img src="./assets/10/22.png" alt="missing image" width="800"/>

# S9 | Allowing for Quote Deletion

---

This will not work
<img src="./assets/10/23.png" alt="missing image" width="800"/>

@click.native
<img src="./assets/10/24.png" alt="missing image" width="800"/>

-   But what I can do is I can add the native modifier.
-   What the native modifier does is it tells vuejs well react to a click on that component if it happens on the native element of this component
-   So it will basically register a click here on the div which in the end is what sets in html code
-   But since we add the native modifier here, it knows even though that happened on the html code of that component, treat it like I clicked on `app quote` here
-   which in general I can't because that is not appended to the dom, only
    the code in the template is appended to the dom.
-   So this allows me to click on a component, as it will treat clicks on the template as clicks on the component
-   and I can therefore execute the `delete quote` method.

deleteQuote
<img src="./assets/10/25.png" alt="missing image" width="800"/>

How do i know which quotes to delete. I need the index of the quote to delete the right one from the array
<img src="./assets/10/26.png" alt="missing image" width="800"/>
<img src="./assets/10/27.png" alt="missing image" width="800"/>
<img src="./assets/10/28.png" alt="missing image" width="800"/>
<img src="./assets/10/29.png" alt="missing image" width="800"/>
<img src="./assets/10/30.png" alt="missing image" width="800"/>

# S9 | Controlling Quotes with a Progress Bar

---

Bootstrap progress bar
<img src="./assets/10/31.png" alt="missing image" width="800"/>
<img src="./assets/10/32.png" alt="missing image" width="800"/>
<img src="./assets/10/33.png" alt="missing image" width="800"/>
<img src="./assets/10/34.png" alt="missing image" width="800"/>
<img src="./assets/10/35.png" alt="missing image" width="800"/>
<img src="./assets/10/36.png" alt="missing image" width="800"/>

# S9 | Finishing Touches and State Management

---

<img src="./assets/10/37.png" alt="missing image" width="800"/>
<img src="./assets/10/38.png" alt="missing image" width="800"/>

Add restriction on adding quotes more than 10
<img src="./assets/10/39.png" alt="missing image" width="800"/>
