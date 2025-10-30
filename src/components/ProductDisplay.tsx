// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}


function ProductDisplay({product, showDescription, showStockStatus, onAddToCart,children}:ProductDisplayProps){
  return (
    
    <div>
      <h1 className="text-4xl mb-5">Producs Detail</h1>
        <p><img src="./wirelessHeadPhone.jpg" alt="product"  className="w-100 h-50 object-cover" /></p>
      <p className="font-bold">Product Id: {product.id}</p>
      <p  className="font-bold">Product name: {product.name}</p>   
      <p  className="font-bold">Product price: {product.price}</p>     
      {showDescription && <p  className="font-bold">Description: {product.description}</p>}
    
      {showStockStatus && <p  className="font-bold">Available: {product.inStock ? 'Yes' : 'No'}</p>}
      {onAddToCart && (
        <button onClick={() => onAddToCart?.(product.id)}
         className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors duration-200">
        Add to Cart
      </button>
      )

      }
    {children}
      
    

    </div>
  )
}

export default ProductDisplay;