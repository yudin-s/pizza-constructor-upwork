<template>
  <div class="home">
    <div>Select Toppings</div>
    <div>
      <div v-for="(item, index) in toppings" :key="index">
        {{ item.name }} {{ item.price }}
        <hr />
        <small v-if="isSelected(item)">(selected)</small>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Topping",
  model: {
    prop: "toppings",
    value: "toppingschanged",
  },
  computed: {
    ...mapGetters({
      toppings: "options/toppings",
    }),
    toppingsLocal: {
      get() {
        return this.toppings;
      },
      set(value) {
        this.$emit("toppingschanged", value);
      },
    },
  },
  methods: {
    toggleTopping(topping) {
      var isFind = false;
      this.toppingsLocal.filter((el) => {
        if (topping.name !== el.name) {
          isFind = true;
          return true;
        }
      });
      if (!isFind) {
        this.toppingsLocal = this.toppingsLocal.push(topping);
      }
      return this.toppingsLocal;
    },
    isSelected(topping) {
      return this.toppingsLocal.find((el) => {
        return el.name === topping.name;
      });
    },
  },
};
</script>
