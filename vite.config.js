import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [tailwindcss(), react()],
    base: "/lions_club_international_liberia",
  };
});
