<template>
  <div id="app">
    <div class="container mx-auto lg:px-10 sm:px-0">
      <Card class="dark:bg-red-900 dark:bg-opacity-60">
        <p :class="errorData.Fatal ? 'text-red-400' : 'text-gray'" class="pl-8 pt-4 pb-4 text-left  font-semibold" v-text="message">/>
        <p class="text-left pb-3 pl-8 text-sm dark:text-gray-300 text-gray-400" v-text="desc"/>
      </Card>

      <Card class="dark:bg-gray-600 " v-if="errorData.Debug"> 
        <p class="p-4 dark:bg-gray-700 rounded-t-lg">Trace info</p>
        <div v-for="(trace, idx) in errorData.Traces" :key="idx">
            <p class="px-4 py-1" v-text="`${trace.File}:${trace.Line}`"></p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Default",
  components: { Card },
  computed: {
      errorData() {
          return window._errorData
      },
      message() {
          return `🧨[${this.errorData.Code}] ${this.errorData.Message}`
      },
      desc() {
          return `${this.errorData.File} :${this.errorData.Line}`
      }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
