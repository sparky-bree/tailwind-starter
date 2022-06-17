class ProductTile extends HTMLElement {
  constructor() {
    super();
    this.section = document.createElement('div');
    this.siblingSwatches = [...this.querySelectorAll('[data-product-url]')];
  }

  connectedCallback() {
    this.siblingSwatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        this.fetchTile(swatch.dataset.productUrl);
      });
    });
  }

  reInit() {
    this.section = document.createElement('div');
    this.siblingSwatches = [...this.querySelectorAll('[data-product-url]')];
    this.siblingSwatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        this.fetchTile(swatch.dataset.productUrl);
      });
    });
  }

  fetchTile(productUrl) {
    fetch(`${window.location.pathname}${productUrl}?sections=product_tile`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((parsedState) => {
        const json = JSON.parse(parsedState);
        this.section.innerHTML = json.product_tile;
      })
      .finally(() => {
        if (this.section.querySelector('product-tile')) {
          this.innerHTML = this.section.querySelector('product-tile').innerHTML;
          this.reInit();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
customElements.define('product-tile', ProductTile);
