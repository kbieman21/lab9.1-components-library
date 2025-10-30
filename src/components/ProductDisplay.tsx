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
      <h1>Producs Detail</h1>
      <p>Product Id: {product.id}</p>
      <p>Product name: {product.name}</p>   
      <p>Product price: {product.price}</p>     
      {showDescription && <p>Description: {product.description}</p>}
      <p>Image: {product.imageUrl}</p>
      {showStockStatus && <p>Available: {product.inStock ? 'Yes' : 'No'}</p>}
      {onAddToCart && (
        <button onClick={() => onAddToCart?.(product.id)}>
        Add to Cart
      </button>
      )

      }
      

    <p>children</p>
      
    

    </div>
  )
}

export default ProductDisplay;