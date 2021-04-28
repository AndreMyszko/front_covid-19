<template>
  <div id="pie" class="container">
    <b-card id="def" class="mb-2" title="Vue Google Charts">
      <b-card-text>
        <div class="row m-auto">

            <div class="col-lg-4 col-md-12 m-0 p-0">
            <GChart      
            type="PieChart"
            :data="chartData"
            :options="chartOptions"
            style="height: 300px; backgroundColor: { fill:'transparent' };"
            />
            </div>

            <div class="col-lg-4 col-md-12 m-0 p-0">
            <GChart      
            type="PieChart"
            :data="chartData2"
            :options="chartOptions"
            style="height: 300px;"
            />
            </div>

            <div class="col-lg-4 col-md-12 m-0 p-0">
            <GChart      
            type="PieChart"
            :data="chartData3"
            :options="chartOptions"
            style="height: 300px;"
            />
            </div>

        </div>  
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "VueGoogleCharts",

  components: {
    GChart
  },

  data() {
    return {
      chartData: [
        ["Tile", "Description"],
        ["val_1", 143479],
        ["val_2", 3956],
        ["val_3", 50000]

      ],
      chartData2: [
        ["Status", "Description"],
        ["val_1", 143824],
        ["val_2", 300972]
      ],
      chartData3: [
        ["Status", "Description"],
        ["val_1", 144150],
        ["val_2", 30978]
      ],

      chartOptions: {
          backgroundColor: { fill:'transparent' }
      }
    }
  },

  computed: {
  },

  methods: {
  },
  
  created() {
  },
};
</script>

<style scoped>
#pie{
    background-color: rgba(0,0,0,0);
    color: rgb(255, 255, 255);
}
#def{
    background-image: radial-gradient(circle at 85% 1%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 96%,transparent 96%, transparent 100%),radial-gradient(circle at 14% 15%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 1%,transparent 1%, transparent 100%),radial-gradient(circle at 60% 90%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 20%,transparent 20%, transparent 100%),radial-gradient(circle at 79% 7%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 78%,transparent 78%, transparent 100%),radial-gradient(circle at 55% 65%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 52%,transparent 52%, transparent 100%),linear-gradient(135deg, rgb(37, 56, 222),rgb(96, 189, 244));
}
</style>