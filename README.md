# dynamic imports 

1. Not a React thing...its a JS thingh
   avoid unnecessary downloads and reduces page sizes
2. useful in large project with huge code sizes
3. very important for the external libraries 


Bundling is the process of following imported files and merging them into a single file: a “bundle”


Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load


When Webpack comes across this syntax, it automatically starts code-splitting your app. If you’re using Create React App, this is already configured for you and you can start using it


The React.lazy function lets you render a dynamic import as a regular component.

ideally set it on the route leve;
