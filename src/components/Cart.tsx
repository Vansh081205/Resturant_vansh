import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import type { CartItem } from "./MenuSection";

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = totalPrice * 0.1; // 10% tax
  const finalTotal = totalPrice + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    toast({
      title: "Order Placed! 🎉",
      description: `Your order of $${finalTotal.toFixed(2)} has been sent to the kitchen.`,
      duration: 5000,
    });
    
    onClearCart();
    setIsOpen(false);
  };

  const CartIcon = () => (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs cart-bounce"
        >
          {totalItems}
        </Badge>
      )}
    </div>
  );

  const CartContent = () => (
    <div className="flex flex-col h-full">
      {cartItems.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
          <p className="text-muted-foreground">Add some delicious items to get started!</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-gradient-card shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-destructive hover:text-destructive h-auto p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <span className="font-semibold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4 mt-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span className="text-primary">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                variant="elegant" 
                className="w-full" 
                size="lg"
                onClick={handleCheckout}
              >
                Place Order • ${finalTotal.toFixed(2)}
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={onClearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="elegant"
              size="lg"
              className="rounded-full shadow-gallery hover:shadow-elegant"
            >
              <CartIcon />
              {totalItems > 0 && (
                <span className="ml-2 font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Your Order ({totalItems} items)
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 h-[calc(100vh-100px)]">
              <CartContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Cart Summary Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-gallery z-40 lg:hidden">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-semibold">{totalItems} items</p>
              <p className="text-sm text-muted-foreground">${totalPrice.toFixed(2)}</p>
            </div>
            <Button
              variant="elegant"
              onClick={() => setIsOpen(true)}
              className="gap-2"
            >
              <CartIcon />
              View Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};