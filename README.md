# Shutl Front End test

Thank you for applying to our **Frontend Developer** role at **Shutl, an eBay company**! 
If you have already downloaded or cloned the repository containing the test, you will find a document named ```Front-End_Coding_Test.pdf``` (wich includes this readme content) and a .png extension file called ```front-end-test-design.png``` in the ```/requirements``` folder. Please, let us know ASAP if there’s anything that’s not very clear and we’ll get back to you super quickly. 😊

We setup a React application for you, bootstrapped with [Create React App](https://github.com/facebook/create-react-app)., that does not include any of the elements you see in that design image. These elements are the ones that you will have to build. The application, in its current initial form, will just show a paragraph with a welcome text.


We’d like you to spend **around 3 hours** working on the exercise. Feel free to use any external libraries if you need so. If you are unable to complete it, please still submit what you have done. We will review it and if we like your solution, we will invite you to an in office pairing session with one of our engineers.

The main things we will be looking for with this exercise are:

1. Code structure
2. Semantics
3. Best practices
4. Styling approach
5. Accessibility standards
6. Documentation
7. Optimisation
8. Code Reusability


## Expected Behaviour

According to the design image, when the page is loaded we want to see the ```Shutl 2-3 Days``` delivery service run by **myHermes** to be the one selected by default.

Remember, the data will be available once you run `npm run server` which will allow you to get the data from “http://localhost:3004/draft-label”

In the bottom section, you’ll see the information of this selected service and the total price for it.

When the user selects a different service, the bottom section should be updated with the new service selected. And that’s it! 😊

The different texts that you see in blue are meant to be external links, so feel free to add a fake url.


## DESIGN CONSIDERATIONS, ASSETS & STYLE GUIDE

The page should be responsive and the data should be visible in a 320px width screen. We think the design is quite simple for you to come up with a basic solution and make this design responsive. We know this is not a good practice and shouldn’t be encouraged but we’d like to see how you solve it.

That design is made so the content fits in a maximum width of 1024px and for wider screens it just stays centered horizontally.

Ideally, the bottom box should be stuck at the bottom and visible at all times, even if we scroll through the content.

You’ll find the eBay logo in svg format in the assets folder and a png file for the bottle image.


As you’ll notice when running the app for the first time, some css styling is already present on the app. We have added the cdn link to the official eBay Css framework in the html file that renders your react app. You can find all the information and style guide at the following link: https://ebay.github.io/skin/ds6/index.html

If you’d rather import the npm package, feel free to do so. We added the cdn just to speed up development.

Although the design we provided does not contain the eBay typography (Market Sans), the css framework does, so this is what you’ll see instead of Helvetica. With this in mind, don’t worry if your final looks is not exactly like in the png file.


## WHEN YOU ARE DONE! 😊

**Create** a ```dev-README.md``` file in the project root explaining your development choices when working on the exercise, any problems you found, or anything you’d like us to know.

Send us your code via **Github**, so that we can review your work. You can fork the project or create your own repo. If you do this, we’ll let you know when we clone or download it so you can either delete it from your Github account or set it to private.

Good luck!! 👍


## PROJECT SETUP

This app was created using node ```v10.15.3```

Run
### `npm install`
This will install all the dependencies you need to run the project.


In the project directory in a separate terminal tab or window, first run:
### `npm run server`
Runs the server so you can consume the draftLabel object. Open http://localhost:3004/draft-label to see the order information and delivery options.


Then you can run
### `npm run start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
