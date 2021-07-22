<template>
  <div class="pie-chart" :style="pieStyle"></div>
</template>

<script>
export default {
  props: ["pieData"],
  computed: {
    pieStyle() {
      let sum = 0;
      let styles = this.pieData.map(
        (part) => `${part.color} 0 ${(sum += part.value)}%`
      );
      return { background: `conic-gradient(${styles.join(",")})` };
    },
  },
};
</script>

<style scoped>
.pie-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #333;
}
</style>
