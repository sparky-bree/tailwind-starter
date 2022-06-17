const updateQty = (variantId, qty) => {
  const data = {
    id: variantId,
    quantity: qty,
    sections: ['minicart-items'],
  };

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

const addNewItem = (variantId, qty) => {
  const data = {
    id: variantId,
    quantity: qty,
    sections: ['minicart-items'],
  };

  const cartContents = fetch('/cart/add.js', {
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

class MiniCart extends HTMLElement {
  constructor() {
    super();
    this.cart = {};
    this.continueBtns = [...this.querySelectorAll('[data-continue-shopping]')];
    this.toggles = [...document.querySelectorAll('[data-cart-toggle]')];
    this.discountCodeInput = this.querySelector('[data-discount]');
  }

  connectedCallback() {
    this.addListeners();

    this.continueBtns.forEach((btn) => {
      btn.addEventListener('click', () => this.close());
    });

    this.toggles.forEach((btn) => {
      btn.addEventListener('click', () => this.open());
    });

    if (document.readyState === 'complete') {
      this.cartToggles = [...document.querySelectorAll('[data-cart-icon-wrapper]')];
    } else {
      window.addEventListener('load', () => {
        this.cartToggles = [...document.querySelectorAll('[data-cart-icon-wrapper]')];
      });
    }

    if (localStorage.getItem('discount-code') && this.discountCodeInput) {
      this.discountCodeInput.value = localStorage.getItem('discount-code');
    }
  }

  updateVariants(prevVariantId, qty, newVariantId) {
    addNewItem(newVariantId, qty).then(() => {
      updateQty(prevVariantId, 0)
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
    this.toggles = [...document.querySelectorAll('[data-cart-toggle]')];
    this.discountCodeInput = this.querySelector('[data-discount]');

    this.discountCodeInput?.addEventListener('change', () => {
      localStorage.setItem('discount-code', this.discountCodeInput.value);
    });

    this.toggles.forEach((btn) => {
      btn.addEventListener('click', () => this.open());
    });

    [...this.querySelectorAll('[data-delete]')].forEach((el) => {
      el.addEventListener('click', () => {
        updateQty(el.dataset.delete, 0)
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
        updateQty(el.dataset.update, el.dataset.qty)
          .then((data) => {
            this.cart = data;
          })
          .finally(() => {
            this.renderCartItems();
            this.addListeners();
          });
      });
    });

    [...this.querySelectorAll('[data-change-variant]')].forEach((el) => {
      el.addEventListener('change', (e) => {
        const newProduct = JSON.parse(el.dataset.variants)
          .find((variant) => variant.options.includes(e.target.value));
        this.updateVariants(el.dataset.changeVariant, el.dataset.qty, newProduct.id);
      });
    });

    [...this.querySelectorAll('[data-continue-shopping]')].forEach((btn) => {
      btn.addEventListener('click', () => this.close());
    });
  }

  async renderCartItems() {
    if (this.cart?.sections?.['minicart-items']) {
      this.innerHTML = this.cart.sections['minicart-items'];
    }
  }

  refresh(data) {
    this.cart = data;
    this.renderCartItems();
    this.addListeners();
    this.open();
  }

  open() {
    this.classList.remove('hidden');
    setTimeout(() => {
      this.classList.remove('opacity-0');
    }, 401);
    window.addEventListener('click', (e) => {
      this.handleBodyClick(e);
    });
  }

  close() {
    this.classList.add('opacity-0');
    setTimeout(() => {
      this.classList.add('hidden');
    }, 400);
    window.removeEventListener('click', (e) => this.handleBodyClick(e));
  }

  handleBodyClick(e) {
    const { target } = e;
    if (target !== this && !target.closest('mini-cart') && !target.closest('[data-cart-toggle]')) {
      this.close();
    }
  }
}

customElements.define('mini-cart', MiniCart);
