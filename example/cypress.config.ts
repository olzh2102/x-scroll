import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportHeight: 900,
    viewportWidth: 1440,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
