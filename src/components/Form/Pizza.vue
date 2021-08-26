<template>
  <div class="pizza-page">
    <h1>Step 1. Choose pizza size</h1>
    <button v-for="(item, index) in getSizes" :key="index">
      {{ item.name }} ${{ item.price }}
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  model: {
    prop: "size",
    event: "sizechange",
  },
  data() {},
  mounted() {
    console.log(this.sizes);
  },
  methods: {
    sizes() {
      return [];
    },
  },
  computed: {
    ...mapGetters({
      getSizes: "options/getSizes",
    }),
    sizeLocal: {
      get() {
        return this.size;
      },
      set(value) {
        this.$emit("sizechange", value);
      },
    },
  },
};
</script>
<style lang="scss" scoped></style>
