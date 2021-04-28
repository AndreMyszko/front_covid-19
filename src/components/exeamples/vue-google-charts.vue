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
        ["Tile", "Descrition"],
        ["val_1", 143479],
        ["val_2", 3956],
        ["val_3", 50000]

      ],
      chartData2: [
        ["Status", "100k habitantes"],
        ["val_1", 143824],
        ["val_2", 300972]
      ],
      chartData3: [
        ["Status", "100k habitantes"],
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
    background-image: linear-gradient(45deg, rgb(20, 222, 124) 0%, rgb(20, 222, 124) 21%,rgb(25, 190, 119) 21%, rgb(25, 190, 119) 37%,rgb(30, 158, 113) 37%, rgb(30, 158, 113) 46%,rgb(35, 126, 108) 46%, rgb(35, 126, 108) 53%,rgb(39, 94, 103) 53%, rgb(39, 94, 103) 59%,rgb(44, 62, 97) 59%, rgb(44, 62, 97) 77%,rgb(49, 30, 92) 77%, rgb(49, 30, 92) 100%);
}
</style>