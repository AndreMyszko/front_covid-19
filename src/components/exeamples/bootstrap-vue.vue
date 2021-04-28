<template>
  <div class="container">
    <b-card id="def" class="mb-2" title="Bootstrap Vue">
      <!-- CARDS -->
      <div class="col-md-12 mb-5 mt-5">
      <h5>Cards</h5>
      <b-card-text id="defCard">
        <div>
          <b-card-group deck>

            <b-card
              header="featured"
              header-tag="header"
              footer="Card Footer"
              footer-tag="footer"
              title="Title"
            >
              <b-card-text>Header and footers using props.</b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>

            <b-card title="Title" header-tag="header" footer-tag="footer">
              <template #header>
                <h6 class="mb-0">Header Slot</h6>
              </template>
              <b-card-text>Header and footers using slots.</b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
              <template #footer>
                <em>Footer Slot</em>
              </template>
            </b-card>

          </b-card-group>
        </div>
      </b-card-text>
      </div>

      <!-- DROPDOWNS -->
      <div class="col-md-12 mb-5">
        <h5>DropDowns</h5>
        <div>
          <b-dropdown text="Button text via Prop" class="mr-2">
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-dropdown>

          <b-dropdown>
            <template #button-content>
              Custom <strong>Content</strong> with <em>HTML</em> via Slot
            </template>
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <!-- FORMS -->
      <div class="col-md-12 mb-3">
        <h5>Forms</h5>
        <!-- f1 -->
        <div class="mb-4 mt-3">
          <b-form-select v-model="selected_f1" :options="options" size="sm"></b-form-select>
          <div>Selected: <strong>{{ selected_f1 }}</strong></div>
        </div>  

        <!-- f2 -->
        <div class="mb-4">
          <b-form-rating v-model="value_f2" variant="warning"></b-form-rating>
          <p>Value: {{ value_f2 }}</p>
        </div> 

        <!-- f3 -->
        <b-row>
          <b-col md="auto">
            <b-calendar v-model="value_f3" @context="onContext_f3" locale="en-US"></b-calendar>
          </b-col>
          <b-col>
            <p>Value: <b>'{{ value_f3 }}'</b></p>
            <p class="mb-0">Context:</p>
            <pre class="small text-info">{{ context_f3 }}</pre>
          </b-col>
        </b-row>
      </div>









    </b-card>
  </div>   
</template>

<script>
export default {
    name:"BootstrapVue",

    data() {
      return {

        //f1
        selected_f1: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        //f2
        value_f2: 3,
        //f3
        value_f3: '',
        context_f3: null
      }
    },
    methods: {
      //f3
      onContext_f3(ctx) {
        this.context_f3 = ctx
      }
    }
    
}
</script>

<style scoped>
#def{
  color: rgb(255, 255, 255);
  background-image: linear-gradient(301deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(438deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(304deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(418deg, rgba(45,148,88, 0.02) 0%, rgba(45,148,88, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(429deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(198deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(121, 121, 121, 0.03) 66.668%, rgba(121, 121, 121, 0.03) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(369deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(191deg, rgb(53,54,70),rgb(53,54,70));
}
#defCard{
  color: rgb(0, 0, 0);
}

</style>