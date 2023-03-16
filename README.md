Vue Counter App
This is a Vue.js application that implements a simple counter with increment, decrement, reset, and set value functionality. The application uses Vue.js and Vuex for state management.

Installation and Setup
Clone this repository using git clone https://github.com/your-username/vue-counter.git.
Change into the project directory using cd vue-counter.
Install the required dependencies using npm install.
Run the application using npm run serve.
Navigate to http://localhost:8080/counter to view the counter page.

Counter Composable
The counter functionality is implemented as a composable function that can be used across the application. The composable function provides the following functions:

increment() - increment the counter by 1.
decrement() - decrement the counter by 1.
reset() - reset the counter to 0.
setValue(value: number) - set the counter to a specific value.

State Management
The application uses Vuex for state management. The counter state is stored in the Vuex store, which can be accessed and modified using the composable functions.

UI
The counter UI is implemented using the Vue.js framework. The UI displays the current counter value and provides buttons for incrementing, decrementing, resetting, and setting the counter value.

Routes
The counter functionality is housed in a page with the route '/counter'. Any other route will redirect the user to a 404 page handled by the wildcard route.


Hosted Link: https://vue-counter-application.vercel.app/#/
