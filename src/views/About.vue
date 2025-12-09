<template>
      <div class="about">
  <div class="about-page">
    <h1>About Our Restaurant & Café</h1>
    <p>
      Welcome to <strong>FoodHeaven</strong> — where delicious taste meets warm hospitality.
      We’re passionate about serving freshly prepared meals, brewed coffee, and delightful desserts
      that make every visit special.
    </p>

    <p>
      Our chefs use the finest ingredients to create flavors you'll never forget.
      Whether you're here for a quick snack or a full-course dinner, we promise a memorable dining experience.
    </p>

    <div class="highlight">
      <h3>🍕 What We Offer</h3>
      <ul>
        <li>Fresh & Organic Ingredients</li>
        <li>Fast Delivery and Takeaway</li>
        <li>Comfortable Café Environment</li>
        <li>Friendly Staff & Quick Service</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.about {
  background: linear-gradient(to bottom right, #deb887, #f5deb3);
  min-height: 10vh;
  padding: 40px 20px;
}

.about-page {
  max-width: 800px;
  margin: 80px auto;
  text-align: center;
  padding: 30px;
  background: beige;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  color: #4e342e;
  line-height: 1.6;
}

.about-page h1 {
  color: #3e2723;
  font-size: 2rem;
  margin-bottom: 20px;
}

.about-page p {
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.highlight {
  margin-top: 30px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
}

.highlight h3 {
  margin-bottom: 10px;
}

.highlight ul {
  list-style: none;
  padding: 0;
}

.highlight li {
  font-weight: 500;
  margin: 8px 0;
}
</style>
