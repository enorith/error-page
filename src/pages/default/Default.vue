<template>
  <div id="app">
    <div class="container mx-auto">
      <Card class="dark:bg-red-900 dark:bg-opacity-60">
        <p class="pl-8 pt-4 pb-4 text-left text-red-400 font-semibold">🧨 [500] Internal server error</p>
        <p class="text-left pb-3 pl-8 text-sm dark:text-gray-300 text-gray-400">
          Lorem ipsum dolor sit amet ..
        </p>
      </Card>

      <Card class="dark:bg-gray-600"> 
        
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Default",
  components: { Card },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
