<template>
  <div>
    <div>
      <slot name="default" />
    </div>
    <div>
      <div>
        <table>
          <tr>
            <td>Total:</td>
            <td>{{ total }}</td>
          </tr>
          <tr>
            <td>Total inc. VAT</td>
            <td>{{ totalIncVat }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TotalLayout",
  computed: {
    ...mapGetters({
      vat: "options/vat",
    }),
    total() {
      return 0;
    },
    totalIncVat() {
      return this.total * this.vat;
    },
  },
};
</script>
