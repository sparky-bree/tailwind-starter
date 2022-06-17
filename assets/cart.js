const cartUpdateQty = (id, quantity) => {
  const data = { id, quantity, sections: ['cart'] };
  const cartContents = fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });

  return cartContents;
};

class Cart extends HTMLElement {
  constructor() {
    super();
    this.cart = {};
  }

  connectedCallback() {
    this.addListeners();
  }

  updateVariants(prevVariantId, qty, newVariantId) {
    this.cartAddNewItem(newVariantId, qty).then(() => {
      cartUpdateQty(prevVariantId, 0)
        .then((data) => {
          this.cart = data;
        })
        .finally(() => {
          this.renderCartItems();
          this.addListeners();
        });
    });
  }

  addListeners() {
    [...this.querySelectorAll('[data-continue-shopping]')].forEach((btn) => {
      btn.addEventListener('click', () => this.close());
    });

    [...this.querySelectorAll('[data-delete]')].forEach((el) => {
      el.addEventListener('click', () => {
        cartUpdateQty(el.dataset.delete, 0)
          .then((data) => {
            this.cart = data;
          })
          .finally(() => {
            this.renderCartItems();
            this.addListeners();
          });
      });
    });

    [...this.querySelectorAll('[data-update]')].forEach((el) => {
      el.addEventListener('click', () => {
        cartUpdateQty(el.dataset.update, el.dataset.qty)
          .then((data) => {
            this.cart = data;
          })
          .finally(() => {
            this.renderCartItems();
            this.addListeners();
          });
      });
    });
  }

  async renderCartItems() {
    if (this.cart?.sections?.cart) {
      this.innerHTML = this.cart.sections.cart;
    }
  }

  refresh(data) {
    this.cart = data;
    this.renderCartItems();
    this.addListeners();
  }
}

customElements.define('custom-cart', Cart);
