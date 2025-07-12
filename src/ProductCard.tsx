import { useState } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  backText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, description, backText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-96 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded-xl overflow-hidden z-20">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-yellow-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-yellow-100 rounded-xl p-4 flex items-center justify-center text-center text-gray-800 font-medium"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {backText}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
