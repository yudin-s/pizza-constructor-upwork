const options = {
  namespaced: true,
  state: () => ({
    size: [
      {
        name: "Small",
        price: 5.0,
      },
      {
        name: "Medium",
        price: 10.0,
      },

      {
        name: "Large",
        price: 15.0,
      },
      {
        name: "Extra Large",
        price: 5.0,
      },
    ],
    toppings: [
      {
        name: "Mushrooms",
        price: 1.0,
        except: [],
      },
      {
        name: "Olives",
        price: 1.0,
        except: [],
      },
      {
        name: "Tomato",
        price: 0,
        except: [],
      },
      {
        name: "Tona",
        price: 1.0,
        except: [],
      },
      {
        name: "Pineapple",
        price: 3.0,
        except: [],
      },
      {
        name: "Seafood",
        price: 5.0,
        except: [],
      },
      {
        name: "Pepperoni",
        price: 2.0,
        except: [],
      },
      {
        name: "Bacon",
        price: 1.0,
        except: ["Mozzarella"],
      },
      {
        name: "Onion",
        price: 1.0,
        except: [],
      },
      {
        name: "Mozzarella",
        price: 3.0,
        except: ["Bacon"],
      },
    ],
    VAT: 1.15,
    toppingsMax: 6,
  }),
  getters: {
    size: (state) => state.size,
    toppings: (state) => state.size,
    vat: (state) => state.vat,
    toppingsMax: (state) => state.toppingsMax,
  },
};
export default options;
