<template>
  <div id="app">
    <div class="container mx-auto lg:px-10 sm:px-0 lg:mt-20">
      <Card  :class="errorData.Fatal ? 'dark:bg-red-900 bg-red-400' : 'dark:bg-gray-700'" class="dark:bg-opacity-60">
        <p :class="errorData.Fatal ? 'dark:text-red-400  text-yellow-200' : 'text-gray'" class="pl-8 pt-4 pb-4 text-left  font-semibold" v-text="message">/>
        <p v-if="errorData.debug" class="text-left pb-3 pl-8 text-sm dark:text-gray-300 text-gray-200" v-text="desc"/>
      </Card>

      <Card class="dark:bg-gray-600 " v-if="errorData.debug"> 
        <p class="p-4 dark:bg-gray-700 rounded-t-lg bg-yellow-50">Trace info</p>
        <div class="divide-y divide-gray dark:divide-gray-500">
          <div v-for="(trace, idx) in errorData.traces" :key="idx">
              <p class="px-4 py-2">{{`${trace.file}:${trace.line}`}}</p>
          </div>
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
          return `🧨 [${this.errorData.code}] ${this.errorData.message}`
      },
      desc() {
          return `${this.errorData.file} :${this.errorData.line}`
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
