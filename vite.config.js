import { defineConfig } from "vite";

export default defineConfig({
  base: "/ip-zpi51-lab7-yuliia-marso-fiot-2026/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cart: "cart.html",
        gallery: "gallery.html",
        form: "form.html",
        timer: "timer.html",
        snackbar: "snackbar.html",
        search: "image-search.html",
      },
    },
  },
});