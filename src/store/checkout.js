/**
 * Pizza obj:
 * size + toppings
 */

const checkout = {
  namespaced: true,
  state: () => ({
    user_data: {},
    pizzas: [],
  }),
  getters: {
    getPizza: (state) => state.pizza,
  },
  mutations: {
    setPizza: (state, pizza) => (state.pizza = pizza),
  },
  actions: {
    addPizza() {},
    removePizza() {},
  },
};

export default checkout;
