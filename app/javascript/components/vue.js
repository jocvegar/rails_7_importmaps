import Vue from "vue";

new Vue({
  el: "#vue",
  data: () => ({ counter: 0 }),
  template: `
  <div>
    <h3>{{counter}} Click Me
      <button v-on:click="counter++">Add Using Vue</button>
    </h3>
  </div>
`,
});
