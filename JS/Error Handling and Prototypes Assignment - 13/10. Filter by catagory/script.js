function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  const productsArray = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Clothing' },
    { name: 'Product 3', category: 'Electronics' },
    { name: 'Product 4', category: 'Accessories' },
  ];
  
  const filterByCategory = filterProductsByCategory(productsArray);
  
  const electronicsProducts = filterByCategory('Electronics');
  console.log(electronicsProducts);
  // Output: [{ name: 'Product 1', category: 'Electronics' }, { name: 'Product 3', category: 'Electronics' }]
  
  const clothingProducts = filterByCategory('Clothing');
  console.log(clothingProducts);
  // Output: [{ name: 'Product 2', category: 'Clothing' }]
  
  const accessoriesProducts = filterByCategory('Accessories');
  console.log(accessoriesProducts);
  // Output: [{ name: 'Product 4', category: 'Accessories' }]
  