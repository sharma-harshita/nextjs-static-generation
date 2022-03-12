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
    2. It willl never run client-side.
    3. The code that we are writing