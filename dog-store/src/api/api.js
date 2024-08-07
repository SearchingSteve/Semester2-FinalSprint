// mock API for dog store application
// submission date: august 12, 2024
// author: sara woodford

const products = [
    {id: 1, product: 'Dog Bed', description: 'Comfy Dog Bed for Your Furry Friend!', price: 35},
    {id: 2, product: 'Harness', description: 'Suitable for Small Dogs', price: 30},
    {id: 3, product: 'Harness', description: 'Suitable for Medium Dogs', price: 30},
    {id: 4, product: 'Harness', description: 'Suitable for Large Dogs', price: 30},
    {id: 5, product: 'Stylish Collar', description: 'Perfect for X-Small - Small Dogs', price: 25},
    {id: 6, product: 'Stylish Collar', description: 'Perfect for Medium - Large Dogs', price: 25},
    {id: 7, product: "4' Leash", description: 'Silicone Material to Prevent Wear and Tear', price: 20},
    {id: 8, product: "15' Tether", description: 'Keep Your Fur Baby Outside With No Fear of Escape!', price: 20},
    {id: 9, product: 'Dog Treat Chews', description: 'Your Dog Will Love These Dried Liver Chews!', price: 15},
    {id: 10, product: 'Dog Bones', description: 'Kepp Your Dog Busy With These Real Bones - Great For Dental Health!', price: 10},
    {id: 11, product: 'Deshedding Brush', description: 'No Body Likes Dog Hair all Over Their House - This Brush Will Cut Down on Excessive Shedding!', price: 10},
    {id: 12, product: 'Dog Bone Toy', description: 'This Silicone Dog Bone Can Withstand All of Your Dogs Chews!', price: 5},
    {id: 13, product: 'Dog Rope Toy', description: 'Tire Your Dog Out With Some Tug of War! This Toy Will Keep Them Busy for Hours', price: 5},
    {id: 14, product: 'Tennis Balls - 3 Pack', description: "Who Doesn't Love Fetch? This 3 Pack Provides Triple the Fun!", price: 5},
    {id: 15, product: 'Tennis Ball', description: "A Classic Toy That Every Dog Loves!", price: 2},
];

export const getProducts = () => products;

export const productsById = (productId) => 
    products.find((product) => product.id === productId);
