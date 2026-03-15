console.clear();
const base = 'http://localhost:3000';

const functions = {
  async getProduct() {
    const response = await fetch(base + '/products/notebook');
    const body = await response.json();
    console.table(body);
  },
  async getProduct2() {
    const response = await fetch(base + '/products/sem');
    const body = await response.json();
    console.table(body);
  },
};

functions[process.argv[2]]();
