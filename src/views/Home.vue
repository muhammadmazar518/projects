<template>
  <div class="home-wrapper">
    <Header />

    <main>
      <div class="text">
        <h3>Welcome to Khosa's Restaurant & Cafe</h3>
        <p>Delicious food, cozy vibes! Where good food and coffee connect.</p>
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(item, index) in topRatedItems"
            :key="item.id"
            :class="{ active: index === 0 }"
          >
            <img :src="item.image" class="carousel-img" :alt="item.name" />
            <div class="carousel-caption d-none d-md-block">
              <h1 @click="goToDetails(item.id)" class="clickable-title">
                {{ item.name }}
              </h1>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import { useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { useMenuStore } from "../stores/menuStore";

const router = useRouter();
const menuStore = useMenuStore();

onMounted(async () => {
  if (menuStore.items.length === 0) {
    await menuStore.fetchMenu();
  }
});

const topRatedItems = computed(() =>
  menuStore.items.filter((item) => item.rating >= 4.6)
);

function goToDetails(id) {
  router.push({ name: "Details", params: { id } });
}
</script>

<style scoped>
header {
  margin: 0 !important;
  padding: 0 !important;
}

.home-wrapper {
  background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.4),
      rgba(50, 50, 50, 0.6)
    ),
    url("../assets/data/Images/beryani.jpg") no-repeat center center;
  background-size: cover;
  color: #fff;
  height: 100vh;
  overflow: hidden;
}

.text {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  max-width: 550px;
  margin: 80px auto 20px;
  color: #3e2723;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.clickable-title {
  cursor: pointer;
  background-color: blanchedalmond;
  border-radius: 4px;
  font-size: 24px;
  width: fit-content;
  padding: 6px 10px;
  margin: 240px;
  margin-left: -130px;
  color: #000;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.clickable-title:hover {
  background-color: #ffc107;
  transform: scale(1.05);
}

.carousel {
  width: 90%;
  height: 350px;
  max-width: 900px;
  margin: 40px auto;
}

.carousel-title {
  position: absolute;
  top: 20px;
  right: 25px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
}

.carousel-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-caption {
  position: absolute;
  bottom: 40px;
}
</style>
