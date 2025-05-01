
import { useState } from 'react';
import { Baby, Shirt, Tags, Tag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Categories = () => {
  const [priceRange, setPriceRange] = useState([20, 100]);

  // Age groups
  const ageGroups = [
    { id: 'baby', label: '0-2 years', icon: <Baby className="h-10 w-10 mb-2" /> },
    { id: 'toddler', label: '2-4 years', icon: <Baby className="h-10 w-10 mb-2" /> },
    { id: 'kids', label: '4-8 years', icon: <Baby className="h-10 w-10 mb-2" /> },
    { id: 'pre-teen', label: '8-12 years', icon: <Baby className="h-10 w-10 mb-2" /> },
  ];

  // Gender categories
  const genderCategories = [
    { id: 'boys', label: 'Boys' },
    { id: 'girls', label: 'Girls' },
    { id: 'unisex', label: 'Unisex' }
  ];

  // Trend categories
  const trendCategories = [
    { id: 'superhero', label: 'Superhero' },
    { id: 'princess', label: 'Princess' },
    { id: 'animals', label: 'Animals' },
    { id: 'space', label: 'Space' },
    { id: 'dinosaurs', label: 'Dinosaurs' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shop by <span className="text-kidstore-blue">Categories</span></h2>
        
        <Tabs defaultValue="age" className="max-w-4xl mx-auto">
          <TabsList className="bg-kidstore-purple/20 rounded-full p-1 mb-8 w-full grid grid-cols-4 h-14">
            <TabsTrigger value="age" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow">
              <span className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                <span className="hidden sm:inline">By Age</span>
              </span>
            </TabsTrigger>
            <TabsTrigger value="gender" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow">
              <span className="flex items-center gap-2">
                <Shirt className="h-5 w-5" />
                <span className="hidden sm:inline">By Gender</span>
              </span>
            </TabsTrigger>
            <TabsTrigger value="trend" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow">
              <span className="flex items-center gap-2">
                <Tags className="h-5 w-5" />
                <span className="hidden sm:inline">By Trend</span>
              </span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow">
              <span className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span className="hidden sm:inline">By Budget</span>
              </span>
            </TabsTrigger>
          </TabsList>
          
          {/* Age Tab Content */}
          <TabsContent value="age" className="p-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ageGroups.map((age) => (
                <div 
                  key={age.id} 
                  className="category-card bg-kidstore-blue/10 hover:bg-kidstore-blue/20 cursor-pointer"
                >
                  <div className="bg-white rounded-full p-4 mb-4">
                    {age.icon}
                  </div>
                  <h3 className="font-bold">{age.label}</h3>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Gender Tab Content */}
          <TabsContent value="gender" className="p-1">
            <div className="grid grid-cols-3 gap-4">
              {genderCategories.map((gender) => (
                <div 
                  key={gender.id} 
                  className="category-card bg-kidstore-pink/10 hover:bg-kidstore-pink/20 cursor-pointer"
                >
                  <div className="bg-white rounded-full p-4 mb-4">
                    <Shirt className="h-10 w-10 mb-2" />
                  </div>
                  <h3 className="font-bold">{gender.label}</h3>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Trend Tab Content */}
          <TabsContent value="trend" className="p-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {trendCategories.map((trend) => (
                <div 
                  key={trend.id} 
                  className="category-card bg-kidstore-purple/10 hover:bg-kidstore-purple/20 cursor-pointer"
                >
                  <div className="bg-white rounded-full p-4 mb-4">
                    <Tags className="h-10 w-10 mb-2" />
                  </div>
                  <h3 className="font-bold">{trend.label}</h3>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Budget Tab Content */}
          <TabsContent value="budget" className="p-1">
            <div className="bg-kidstore-yellow/10 p-6 rounded-2xl">
              <h3 className="font-bold mb-6 text-lg text-center">Select Your Budget Range</h3>
              
              <div className="mb-8">
                <Slider 
                  defaultValue={[20, 100]} 
                  max={200} 
                  min={0} 
                  step={5} 
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
                
                <div className="flex justify-between mt-2">
                  <span className="bg-kidstore-green/20 px-4 py-1 rounded-full font-semibold">
                    ${priceRange[0]}
                  </span>
                  <span className="bg-kidstore-green/20 px-4 py-1 rounded-full font-semibold">
                    ${priceRange[1]}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Sort By:</label>
                  <Select defaultValue="popularity">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sort Order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Most Popular</SelectItem>
                      <SelectItem value="low-high">Price: Low to High</SelectItem>
                      <SelectItem value="high-low">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="font-medium">Category:</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="toys">Toys</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Categories;
