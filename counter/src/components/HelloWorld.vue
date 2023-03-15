<template>
  <div class="home-view">
    <h1>Welcome to the View Counter App!</h1>
    <p>
      Click the button below to go to the counter app and start counting your views.
    </p>
    <router-link to="/counter" class="go-to-counter-btn">Go to Counter App</router-link>
  </div>
</template>

<style>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.go-to-counter-btn {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.go-to-counter-btn:hover {
  background-color: #0069d9;
}

/* Media queries for responsive design */

/* For screens smaller than 768px */
@media (max-width: 767px) {
  .home-view {
    margin-top: 30px;
  }
  
  .go-to-counter-btn {
    margin-top: 20px;
    padding: 8px 16px;
    font-size: 1.2rem;
  }
}

/* For screens between 768px and 991px */
@media (min-width: 768px) and (max-width: 991px) {
  .home-view {
    margin-top: 40px;
  }
  
  .go-to-counter-btn {
    margin-top: 25px;
    padding: 10px 18px;
    font-size: 1.4rem;
  }
}

/* For screens larger than 991px */
@media (min-width: 992px) {
  .home-view {
    margin-top: 50px;
  }
  
  .go-to-counter-btn {
    margin-top: 30px;
    padding: 12px 22px;
    font-size: 1.6rem;
  }
}
</style>


