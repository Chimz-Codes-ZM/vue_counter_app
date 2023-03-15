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
</style>

