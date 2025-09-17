import { useState } from "react";
import { AmbianceGallery } from "@/components/AmbianceGallery";
import { MenuSection } from "@/components/MenuSection";
import { Cart } from "@/components/Cart";
import type { MenuItem, CartItem } from "@/components/MenuSection";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Gallery Section */}
      <AmbianceGallery />
      
      {/* Menu Section */}
      <MenuSection 
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />
      
      {/* Cart Component */}
      <Cart
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
      
      {/* Bottom Padding for Mobile Cart */}
      <div className="h-20 lg:h-0" />
    </div>
  );
};

export default Index;
