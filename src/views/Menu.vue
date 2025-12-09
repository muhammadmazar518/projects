<template>
  <section class="menu-container">
    <h3 class="menu-heading">Welcome to Khosa's Restaurant & Cafe</h3>
    <div class="menu-grid">
      <MenuItemCard
        v-for="(item, index) in menuStore.items"
        :key="'food-' + index"
        :item="item"
        @toggle-wish="menuStore.toggleWishlist"
        @open-item="goToDetails"
      />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import MenuItemCard from "./MenuItemCard.vue";
import { useMenuStore } from "../stores/menuStore";
import { onMounted } from "vue";
const menuStore = useMenuStore();
const router = useRouter();

function goToDetails(id) {
  router.push({ name: "Details", params: { id } });
}

onMounted(() => {
  menuStore.fetchMenu();
});
</script>

<style scoped>
.menu-container {
  background: linear-gradient(135deg, #deb887, #f5deb3);
  min-height: 100vh;
  padding: 3rem 2rem;
  text-align: center;
}

.menu-heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.menu-grid :deep(.menu-item) {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.menu-grid :deep(.menu-item:hover) {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.menu-item {
  width: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.image {
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
