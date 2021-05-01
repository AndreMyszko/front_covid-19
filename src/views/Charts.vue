<template>
  <div id="def">
    <h3>ALL CHARTS</h3>
    <!-- GOOGLE GEOCHART -->
    <div class="col-md-6">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
    />
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "GlobalChart",
  components: {
    GChart,
  },

  data() {
    return{
      chartData: [
        ["Tile", "Description"],
        ["val_1", 143479],
        ["val_2", 3956],
        ["val_3", 50000],
      ],
      
      chartOptions: {
        backgroundColor: { fill: "transparent" },
      },

    };

  },

  head: {
    title: {
      inner: "Global Chart",
    },
  },
};
</script>

<style scoped>
#def {
  color: rgb(255, 255, 255);
}
</style>
