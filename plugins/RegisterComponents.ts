export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', (vueApp) => {
      //import blok components so they're available everywhere
      const bloks = import.meta.globEager("../components/bloks/**/*.vue");

      Object.entries(bloks).forEach(([path, definition]) => {
          // Get name of component, based on filename
          // "./components/Fruits.vue" will become "Fruits"
          //@ts-ignore
          const componentName = path
              .split("/")
              .pop()
              .replace(/\.\w+$/, "");
          // Register component on this Vue instance
          vueApp.component(componentName, definition.default);
      });
    })
  })