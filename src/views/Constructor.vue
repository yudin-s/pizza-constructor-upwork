<template>
  <total-layout>
    <div>Test</div>
  </total-layout>
</template>
<script>
export default {
  data() {
    return {
      step: "pizza",
      size: "",
      toppings: [],
      customerForm: {
        name: "",
        address: "",
        phone: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
