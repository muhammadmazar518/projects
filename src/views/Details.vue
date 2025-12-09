<template>
  <div class="page">
    <div class="container my-5">
      <div v-if="item" class="item-wrapper">
        <div class="left-section">
          <h2>{{ item.name }}</h2>
          <img
            :src="item.image"
            class="img-fluid rounded mb-3"
            :alt="item.name"
            style="max-width: 400px"
          />
        </div>

        <div class="right-section detail">
          <p>{{ item.description }}</p>
          <p><strong>💵 Price:</strong> ${{ item.price }}</p>
          <p><strong>Category:</strong> {{ item.cuisine }}</p>
          <p><strong>⭐ Rating:</strong> {{ item.rating }}</p>
          <p><strong>Meal Type:</strong> {{ item.mealType.join(", ") }}</p>
          <p><strong>Ingredients:</strong> {{ item.ingredients.join(", ") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useMenuStore } from "../stores/menuStore";

const route = useRoute();
const id = Number(route.params.id);
const menuStore = useMenuStore();
const item = ref(null);

onMounted(async () => {
  if (menuStore.items.length === 0) {
    await menuStore.fetchMenu();
  }
  item.value = menuStore.items.find((i) => i.id === id);
});
</script>

<style scoped>
.page {
  background: linear-gradient(135deg, #deb887, #f5deb3);
  min-height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1000px;
}
.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 30px;
  background: #fff8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.left-section {
  flex: 1;
  text-align: center;
}
.left-section img {
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  object-fit: cover;
}
.right-section {
  flex: 1;
  text-align: left;
  color: #3e2723;
  margin-top: 30px;
}
.right-section p {
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.5;
}
h2 {
  margin-bottom: 15px;
  color: #4e342e;
}
</style>
