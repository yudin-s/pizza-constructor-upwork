<template>
  <total-layout>
    <template v-if="step === 'pizza'">
      <pizza v-model="size" />
      <div>
        <button @click="setStep('toppings')">Next Step</button>
      </div>
    </template>
    <template v-if="step === 'toppings'">
      <topping />
      <div>
        <button @click="setStep('pizza')">Prev Step</button>
        <button @click="setStep('user')">Next Step</button>
      </div>
    </template>
    <template v-if="step === 'user'">
      <div>
        <button @click="setStep('toppings')">Prev Step</button>
        <button>Submit Order</button>
      </div>
    </template>
  </total-layout>
</template>
<script>
import Pizza from "@/components/Form/Pizza.vue";
import Topping from "@/components/Form/Topping.vue";
import TotalLayout from "@/layouts/TotalLayout.vue";
export default {
  components: { Pizza, Topping, TotalLayout },
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
  methods: {
    setStep(step) {
      this.step = step;
    },
  },
};
</script>
<style lang="scss" scoped></style>
