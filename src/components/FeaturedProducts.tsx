
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cartoon Dinosaur T-shirt",
    price: 24.99,
    image: "https://cdn.pixabay.com/photo/2017/09/26/17/34/t-shirt-2789173_1280.png",
    category: "Boys",
    age: "4-8 years",
    trend: "Dinosaurs",
    color: "bg-kidstore-green",
  },
  {
    id: 2,
    name: "Space Adventure Hoodie",
    price: 34.99,
    image: "https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_1280.png",
    category: "Unisex",
    age: "4-8 years",
    trend: "Space",
    color: "bg-kidstore-blue",
  },
  {
    id: 3,
    name: "Princess Sparkle Dress",
    price: 29.99,
    image: "https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png",
    category: "Girls",
    age: "2-4 years",
    trend: "Princess",
    color: "bg-kidstore-pink",
  },
  {
    id: 4,
    name: "Animal Friends Cap",
    price: 19.99,
    image: "https://cdn.pixabay.com/photo/2013/07/13/12/41/hat-160160_1280.png",
    category: "Unisex",
    age: "0-2 years",
    trend: "Animals",
    color: "bg-kidstore-yellow",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-kidstore-purple/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured <span className="text-kidstore-pink">Products</span>
          </h2>
          <a href="#" className="text-kidstore-blue hover:text-kidstore-blue/80 font-medium underline">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="kidstore-card overflow-hidden bg-white group">
              <div className={`aspect-square relative overflow-hidden ${product.color}/10 p-4`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-300 bounce-hover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold">
                  ${product.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-kidstore-blue/10 text-kidstore-blue rounded-full px-3 py-1">
                    {product.category}
                  </span>
                  <span className="text-xs bg-kidstore-purple/10 text-kidstore-purple rounded-full px-3 py-1">
                    {product.age}
                  </span>
                  <span className="text-xs bg-kidstore-pink/10 text-kidstore-pink rounded-full px-3 py-1">
                    {product.trend}
                  </span>
                </div>
                <Button className="w-full kidstore-button bg-kidstore-green hover:bg-kidstore-green/80 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
