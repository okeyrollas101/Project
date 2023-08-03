# Upheave Student Registration App
## Video Demo:  <https://youtu.be/GMQ-Ie9HlXo>
### Description 

"Upheave Student Registration App" is my final project for CS50x. This project is an interactive web application that helps users/students save their personal info. The project is built using React for the frontend and a JSON Server acting as the backend.

### Features
- **User Registration and Login**: Users can create accounts and log in to access the student registration app.
- **About Page**: Users can navigate to this page to get more information on what we do, our mission and who we are.
- **Contact page**: Users can easily communicate with us and give us their feedbacks on how the app could serve them better and also make enquiries.

### Technologies Used
- **Frontend**
  - **React**: I had to go outside the course curriculum to learn a frontend framework named "react". It's a Javascript library that 
      allows you to run both javascript and html codes on the same file known as a JSX file which is a templating language, you create a 
     react app by running "npx create-react-app 'app name'" this sets up a react app in which i used in developing my project. React is 
     a single page application(spa) and that helped in making my project transition very smooth.                                                  
    
      My Project comprises of various react components which sums up the totality of my application, components like Header Component, 
     About Component, Login Component etc. This components are also referred to as JSX file, called components because this files are 
     made up of functional components where you can execute both your javascript, html and css codes which render a result back to the 
     web page. These various component as their names implies eg Header Component, handles the header/NavLink in my application 
     providing the user access to navigate from component to another.

     I had to install all the neccessary dependencies needed to run my react app smoothly, dependencies like AXIOS, Bootstrap, InputMask 
     etc, i installed these dependencies by running "npm install 'name of dependency'" in the terminal. These dependencies add 
    additional functionality to the application and i made use of them by importing them into my JSX file/component then apply them 
   where necessary. FInally i made use of my react component anywhere in the application simply by importing it into the necessary JSX 
     file, but for my project i imported most of  the component in my App Component because the App component App.jsx is the "top 
     component" that contains the logic of your Application whereas index.js is the "entry point" for your server and contains the logic 
     of the server. And you must do well to export your components in order to be able to import them wherever they are needed.
    
 - **React Context API**: I made use of react context api for global state management, With Context API i could store data at the top 
     level of the component tree and make it available to all other components that need it without passing props. Context API allows 
     data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data 
     between components. First, i created a context object using the createContext function from the 'react' library. This context 
     object will hold the data that you want to share across your application, more like preparing a data layer. Secondly, i wrapped the 
     app and provided data layer using a Provider component. The Provider component accepts a "value" prop that holds the shared data, 
     and any component that is a child of the Provider component can access that shared data, in my case the value prop was a useReduce 
     hook which took a reducer and initialState as it arguement.

     I made sure that the provider component was wrapped around the top-level component in my application to ensure that all child 
     components have access to the shared data. Now that the provider component has been created the context needs to be consumed in 
    other components, to do this i used the "useContext" hook from React. This helps to pull info from that data layer, all of theses 
    hooks i.e createContext, useReducer and useContext needs to be imported from the react library and also exported so it could be used 
    elsewhere.
   **HTML/CSS**: I made use of html as my scripting language, i applied html inside of the return statement that comes with each 
    functional component this gets rendered back to the web page and basically what the user get to see, read and understand .
    I made use of various tags here which carried out specific task in making sure i got the desired effect, tags like p tag,div tag, 
    big tag, strong tag etc.

    CSS(cascading style sheet), was used to style my components, they were various css files and each css file had its corresponding 
    JSX file/component. It was at this point during my project i had design conflict, initially didn't know how i wanted my app to turn 
    out so i made use of background-image property in css that enables you slot your own background image into the app, this allowed me 
    to get a couple of images online that helped my app look alive. I made use of flexbox for my design, it enabled me to move properties 
    and tags all over the web page. I styled my html tags by including classes to the tag, with this classes i was able to style my tags 
    in the css files simple by including a "." to the class name. I made use of bootstrap for my contact component design because there 
    was a particular design structure i desired and bootstrap gave me just that, i had to install the bootstrap dependency before i 
  could use bootsrap in my react app. Columns and rows from bootstrap were used to achieve my desired effect also it at the styling of 
   my contact compnent/JSX file that the dark background came to live and it also affected my About JSX file because the property used 
    "body" affects the body of the entire application, so giving the body a background-color of black helped me achieve this dark 
     background effect.
 
- **Backend**
  - **JSON Server**: The JSON server played the role of database in my application, i saw it being used in the finance problem set and 
    i decided to get acquainted with the JSON server. The JSON Server is a Node Module that you can use to create demo rest json 
     webservice in less than a minute. All i needed was a JSON file for sample data. I created my db.json file inside of a data folder 
    in my project directory, i had my json server installed by running "npm install -g json-server" in the terminal.
     
    Important point here is the name of array i.e studentDetails in my case. JSON server will create the REST APIs based on this. The 
    studentDetails array carried samples of how i wanted the students information to be stored. So i previewed/ra my JSON file by 
   running the following in my terminal "json-server --watch data/db.json --port 3001", i had to specify the port because by default 
   react has a port for the development server which is port 3000, Don’t close this terminal otherwise it will kill the json-server.

    I made use of the GET and POST methods to intereact with the JSON server, Axios came in very handy here by making it it easier for 
   me with lesser amoount of code used to interact with the JSON server. JSON server provides some other useful options such as sorting, 
   searching and pagination. That’s all for json-server, it’s my go to tool whenever I need to create demo Rest JSON APIs.
 
- **Firebase**
   I used firebase to handle users authentication and also for my email and password validation. Google Firebase is a set of cloud-based 
   development tools that helped me build, deploy and scale my app. Features like its Authentication helped me to secure an easy way 
   for users to sign into my app. I used Firebase Authentication to support email and password login.

   I created a firebase account after which i created my first firebase project, i linked my firebase project to my react application by 
   navigating to my firebase project setting and locating the SDK config, which i copied for it to be used in a separate file called 
   firebase.js but first i had to install the firebase dependency into my react application. I created a firebase object which comprises 
   of the copied SDK config then i initialized my firebase project with the "firebase.initializeApp" function whose argument is the 
  firebase object i created earlier, also made use of "firebase.auth" method which i used to authenticate users that visit my 
  application.

  I made sure to export the function i.e firebase.auth, because i had to import it into components that required the user authentication 
  like my login componenent. Firebase saved me the hassle of making use of regular expression to validate the creating of my email and password. I finally used firesbase as a tool to deploy my application.

  
## How to run the project locally and available scripts 
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
My app has been deployed! This is my deployed link: <https://cs50finalproject-1abe7.web.app/>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Screenshots
![Home Page] 
![2023-08-03 (6)](https://github.com/okeyrollas101/Project/assets/82764421/7b23d713-9581-42f2-af06-a49778b5f8f9)

![Contact page]
![2023-08-03 (3)](https://github.com/okeyrollas101/Project/assets/82764421/7c2f9aa7-9a2e-4978-8251-c6f3421b3cfd)

![Login page]
![2023-08-03 (4)](https://github.com/okeyrollas101/Project/assets/82764421/45542688-1702-49b1-bb91-ad09c213b7fe)

## Acknowledgments
I would like to express my gratitude to the CS50x course staff and instructors for their guidance and support throughout the course.
