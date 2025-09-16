# VUE V3 Template Web Site (using CDN)

This is my template for a Vue JS website using the jsDelivr CDN rather
than keeping all the npm packages locally. This makes the code a lot
simpler (and smaller) at the expense of not supporting certain Vue
features.
---
 The basic structure of the code is as follows:
 
 <pre>
 ├───components     # Vue components as javascript files
 ├───css            # style sheets
 ├───img            # site images
 ├───js             # Miscellaneous scripts
 └───views          # HTML files with content for the main frame
 index.html         # Single page app (i.e. only user requested HTML file)
</pre>
There are a few other files like fav icon, crawler meta files, but they
are standard on any website and won't be discussed here.

## Index.html
Contains links to all the top level files that are used to render the
website (in the head section). Also includes code for Google Tag Manager.
The whole site is contained in the AppMain component. The only other code is
the page version number (which is available globally) and globals.js which
is mainly used for page navigation (discussed later).
## AppMain
This contains the App structure which is basically:
<pre>
Header           => main-header.js
Frame            => main-frame,js
Footer           => main-footer.js
</pre>
Header and Footer should be self explanatory, although the page header may change for different frame pages. Frame is a container that
pulls in a page from the **views** folder. This page is determined from
the query string, as follows:
<pre>
https://nethercott.net?page={page-name}
</pre>
Normally **page-name** would pull in **page-name.html** from the views folder. If no page is specified in the URL we default to home.html.
## Globals.js
This sets up globals.framePage and globals.subPage based on the request URL.
This file will also contain global functions, like **debugMessage(msg)** which will display msg to the console. This file shouldn't be abused - using lots of global variables and functions is not ideal!
## Views folder
This is the HTML that is displayed in the frame component. It can contain Vue template syntax - although this should be done _very sparingly_, most code should be in components. There should be a sensible naming policy for components, e.g. {base}-{name} where **base** identifies the type of component (so don't use _app_ or _main_).
## TODO
Having the framePage (and subPage) defined globally is not ideal - it would better to hold this in **app-main** and pass it via **props** to **main-frame** and **main-header**. The reason it isn't like this is because **main-frame** is created dynamically once we know what HTML code from the **views** folder is going to be used for the component **template**.
## Usage
This Vue Template can be used for local projects or published websites. I'd recommend Raspberry Pi and **nginx** for local projects and **Github Pages** for published websites.
## Final Notes
Code should look _nice_. So for instance, files should be less than 100 lines, and functions should have a few lines, not tens of lines (or more). It is better to have lots of HTML than lots of javascript. Top level components should be as general as possible. There should be high cohesion within components and low coupling between components. I could go on, but that'll do for now.