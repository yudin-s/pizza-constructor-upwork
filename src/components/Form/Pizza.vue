<template>
  <div class="pizza-page">
    <h1>Step 1. Choose pizza size</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {},
  methods: {},
  computed: {
    ...mapGetters({
      sizes: "options/size",
    }),
  },
};
</script>
<style lang="scss" scoped></style>
