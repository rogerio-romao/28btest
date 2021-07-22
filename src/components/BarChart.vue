<template>
  <div class="bar-graph-wrapper">
    <div
      v-for="item in stats"
      :key="item"
      :style="{ width: item.value + '%', backgroundColor: item.bg }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: {
    stats: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.bar-graph-wrapper {
  border: 1px solid black;
  background-color: #ddd;
  width: 100%;
  height: 15px;
  margin-bottom: 1rem;
  display: flex;
}
</style>
