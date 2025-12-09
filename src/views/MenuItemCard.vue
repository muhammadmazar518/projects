<template>
  <div class="menu-item" @click="goToDetailPage(item.id)">
    <img :src="item.image" :alt="item.name" class="image" />
    <h5>{{ item.name }}</h5>

    <p class="item-price">
      <span class="price-text">💵 ${{ item.price }}</span>

      <button class="wish-btn" @click.stop="toggleWish">
        <i
          :class="
            item.isWished ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'
          "
        ></i>
      </button>
    </p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggle-wish", "open-item"]);

const goToDetailPage = (id) => {
  emit("open-item", id);
};

const toggleWish = () => {
  emit("toggle-wish", props.item);
};
</script>

<style scoped>
.menu-item {
  width: 200px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

h5 {
  margin-top: 8px;
}

p {
  margin-top: 10px;
}
.item-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 1rem;
  color: #333;
}

.price-text {
  font-weight: 600;
  color: #d9534f;
}

.wish-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
}

.wish-btn i {
  transition: transform 0.2s ease, color 0.2s ease;
}

.wish-btn:hover i {
  transform: scale(1.2);
  color: #d9534f;
}
</style>
