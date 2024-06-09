"use client";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from "lucide-react";

const ToastCartButton = ({ product }: any) => {
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} was added to your cart`,
      variant: "default",
      duration: 1500,
    });
  };
  return (
    <button
      onClick={handleClick}
      className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600"
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </button>
  );
};

export default ToastCartButton;
