const products = [
     // Url image examples
     { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10, imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783' },
     { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20, imageUrl: 'https://images.unsplash.com/photo-1532353949707-2e77707ee8a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D' },
     { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30, imageUrl: 'https://images.unsplash.com/photo-1514373941175-0a141072bbc8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
     { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 30, imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6' },

    // Directory image examples
    { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 30, imageUrl: '../images/dogbag1.jpg' },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 30, imageUrl: '../images/dogfood1.jpg' },
    { id: 7, name: 'Product 7', description: 'Description of Product 7', price: 30, imageUrl: '../images/dogfood2.jpg' },
    { id: 8, name: 'Product 8', description: 'Description of Product 8', price: 30, imageUrl: '../images/dogfood3.jpg' },
  ];
  
  export const getProducts = () => products;
  
  export const getProductById = (productId) =>
    products.find((product) => product.id === productId);
  