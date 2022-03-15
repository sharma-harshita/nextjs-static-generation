**SSG : Static Site Generation**


In Next.JS , all the pages are by default Statically generated which means the HTML will be pre-rendered for each and every page and it will be stored or cached in CDN.
This increases the performance of website, because is already rendered.. So its response is very fast.
It also improves SEO



Now if the component requires data from some dummy API or something , then we will have to use  **getStaticProps** 
This is an async function.
This function will also be exported from the component just like component gets exported.
This function is must to return an object which should have a paramter called props which should contain the data which your component needs to render.


If you want to create a component but it should not be a route, then we can not create it in pages folder so we will create separate components folder




**getStaticProps** 

    1. This function only and always run on server side. That is why its log statement will also be visible in terminal not console of browser.
    2. It will never run client-side.
    3. The code that we are writing in this function will not even be included in JS bundle that is sent to the browser.

    4. You can write server-side code directly in getStaticProps.
    5. Accessing the fike system using fs module or querying a database can be done inside this function.
    6. We also do not have to worry about including API keys in getStaticProps as those keys will only be present in VS code , it will never be exposed to the browser.

    7. This function is only allowed in a page means component created inside `pages` folder. This function can not be run from a componennt file.
    8. It is used only for pre-rendering not for client side data fetching.

    9. This function is must to return an object which should have a paramter called props which should contain the data which your component needs to render.

    10. This function will only run at build time
    11. During development, getStaticProps runs on every request.




There are two steps to create the build in next js application : 
npm run build   : This will create the build folder named as ".next"
npm run start   : It will start the application at 3000 port. 



Few important points to always remember as a deployment concept : 

    1. When a page with getStaticProps is pre-rendered at build time, then Next.JS creates two things first HTML Page for the component and secondly creates a JSON file which will hold the result of getStaticProps function.
    2. This JSON file will be loaded in the components where this component (users) is used in routing or linking.
    3. If we are clicking on the users link then no data has to be pre rendered once again, this JSON file will only be used in the component.

NOTE : JSON FILE IS USED FOR CLIENT SIDE NAVIGATION , HTML FILE USED FOR DIRECTLY ACCESSING THE ROUTE

**SUMMARY**

1. Static generation is a method of pre- rendering where the HTML pages are generated at build time.
With and without external data
2. Export getStaticProps function for external data
3. HTML, JS and JSON file will be generated
4. If you navigate directly to the page route, the HTML file is served.    directly /users
5. If you navigate to the page route from a different route, the page is created client side using the JS and the JSON prefetched from the server.








**getStaticPaths** 

[postId.js] component is dependent on data to get pre-rendered so we will have to write the function getStaticProps, 
also this component depends on what id will be coming in the url to get pre - rendered on the screen , so we will have to write another function named getStaticPaths.

This function returns two attributes paths and fallback 
paths attributes is an array of object , this will contain all the kind of values this component can expect during pre-rendering


fallback : can have values like true, false , blocking 

**fallback : false**
    1.