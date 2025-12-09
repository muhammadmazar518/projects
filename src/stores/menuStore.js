import { defineStore } from "pinia";
import axios from "axios";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    items: [],
    wishlist: [],
  }),

  actions: {
    async fetchMenu() {
      try {
        const res = await axios.get("https://dummyjson.com/recipes");
        const recipes = res.data.recipes;

        const customPrices = [
          10, 3, 5, 6, 7, 2, 3, 4, 1, 2, 2, 4, 1.5, 2, 1, 2, 2.5, 3, 1.5, 2, 1,
          1.5, 2, 1, 1, 1, 1.5, 2, 1,
        ];

        this.items = recipes.map((recipe, index) => ({
          ...recipe,
          price: customPrices[index % customPrices.length],
          isWished: false, // 👈 Add boolean here
        }));
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    },

    // 🩷 Toggle wishlist function
    toggleWishlist(item) {
      const index = this.wishlist.findIndex((i) => i.id === item.id);

      if (index === -1) {
        // Item not in wishlist — add it
        this.wishlist.push(item);
        item.isWished = true;
      } else {
        // Item already in wishlist — remove it
        this.wishlist.splice(index, 1);
        item.isWished = false;
      }
    },
  },
});
