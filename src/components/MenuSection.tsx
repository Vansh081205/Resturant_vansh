import { useState } from "react";
import { Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Import food images
import trufflePasta from "@/assets/truffle-pasta.jpg";
import grilledSalmon from "@/assets/grilled-salmon.jpg";
import buddhaBowl from "@/assets/buddha-bowl.jpg";
import chocolateLavaCake from "@/assets/chocolate-lava-cake.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "appetizer" | "main" | "dessert" | "beverage";
  isVeg: boolean;
  allergens?: string[];
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Pasta Delight",
    description: "Handmade pasta with black truffle shavings, creamy parmesan sauce, and fresh herbs",
    price: 32,
    image: trufflePasta,
    category: "main",
    isVeg: true,
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: "2",
    name: "Grilled Atlantic Salmon",
    description: "Fresh salmon fillet with quinoa pilaf, roasted vegetables, and lemon herb sauce",
    price: 28,
    image: grilledSalmon,
    category: "main",
    isVeg: false,
    allergens: ["Fish"]
  },
  {
    id: "3",
    name: "Garden Buddha Bowl",
    description: "Colorful mix of fresh vegetables, quinoa, avocado, and tahini dressing",
    price: 18,
    image: buddhaBowl,
    category: "main",
    isVeg: true,
    allergens: ["Sesame"]
  },
  {
    id: "4",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla ice cream, and fresh berries",
    price: 12,
    image: chocolateLavaCake,
    category: "dessert",
    isVeg: true,
    allergens: ["Gluten", "Dairy", "Eggs"]
  }
];

export interface CartItem extends MenuItem {
  quantity: number;
}

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: CartItem[];
}

export const MenuSection = ({ onAddToCart, cartItems }: MenuSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");
  const { toast } = useToast();

  const categories = [
    { id: "all", label: "All" },
    { id: "appetizer", label: "Appetizers" },
    { id: "main", label: "Main Courses" },
    { id: "dessert", label: "Desserts" },
    { id: "beverage", label: "Beverages" }
  ];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const dietaryMatch = 
      dietaryFilter === "all" || 
      (dietaryFilter === "veg" && item.isVeg) ||
      (dietaryFilter === "non-veg" && !item.isVeg);
    
    return categoryMatch && dietaryMatch;
  });

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const getCartQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem?.quantity || 0;
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Dietary Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            {[
              { id: "all", label: "All" },
              { id: "veg", label: "Vegetarian" },
              { id: "non-veg", label: "Non-Vegetarian" }
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={dietaryFilter === filter.id ? "filter-active" : "filter"}
                size="sm"
                onClick={() => setDietaryFilter(filter.id as typeof dietaryFilter)}
                className="mx-1"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "filter-active" : "filter"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="menu-item overflow-hidden bg-gradient-card border-0 shadow-soft">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={item.isVeg ? "secondary" : "destructive"} className="text-xs">
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </Badge>
                </div>
                {getCartQuantity(item.id) > 0 && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" className="bg-elegant-gold text-rich-charcoal">
                      {getCartQuantity(item.id)} in cart
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                {item.allergens && item.allergens.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Contains:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.allergens.map((allergen) => (
                        <Badge key={allergen} variant="outline" className="text-xs">
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-primary">
                    ${item.price}
                  </span>
                  <Button
                    variant="cart"
                    onClick={() => handleAddToCart(item)}
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No items found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};