<template>
  <ul>
    <li
      v-for="servant in servantList"
      :key="servant.id"
    >
      <p>{{ servant.name }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ServantList } from '../data/servants/ServantList';

@Options({
  data() { return { servantList: ServantList }; },
})
export default class ServantPicker extends Vue {}
</script>
