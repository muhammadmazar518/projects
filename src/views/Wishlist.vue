<template>
  <section class="wish-container">
    <div class="wishlist-page">
      <h2>My Wishlist ❤️</h2>

      <div v-if="!menuStore.wishlist.length" class="empty"></div>

      <div v-else class="wishlist-grid">
        <div
          v-for="(item, index) in menuStore.wishlist"
          :key="index"
          class="wishlist-item"
        >
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <button @click="menuStore.toggleWishlist(item)">❤️</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMenuStore } from "../stores/menuStore";
const menuStore = useMenuStore();
</script>

<style scoped>
.wish-container {
  background: linear-gradient(135deg, #deb887, #f5deb3);
  min-height: 100vh;
  padding: 3rem 2rem;
  text-align: center;
}

.wishlist-page {
  margin: 20px auto;
  max-width: 1200px;
}

.wishlist-item {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.2s ease;
}

.wishlist-item:hover {
  transform: translateY(-5px);
}

.wishlist-item img {
  width: 100%;
  height: 335px;
  object-fit: cover;
  border-radius: 10px;
}

.price {
  font-weight: bold;
  color: #d9534f;
  margin: 8px 0;
}

.remove-btn {
  background-color: #ff6961;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.remove-btn:hover {
  background-color: #e05a50;
}
</style>
