<template>
  <div id="app-root">
    <ServantPicker />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ServantPicker from './components/ServantPicker.vue';

@Options({
  components: {
    ServantPicker,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
