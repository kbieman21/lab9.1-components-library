import { useState } from "react";

import Section from "./components/Section";
import Button from "./components/Button";
import AlertBox from "./components/AlertBox";
import UserProfileCard from "./components/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay";


function App() {
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://example.com/headphones.jpg",
    inStock: true,
  };

  const [cartItems, setCartItems] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(true);


  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    console.log('Item added');    
    // setShowAlert(true);
    alert('Item added')
  };

  const handleOnClose = () => {  
    setShowAlert(false);
  };

 
  return (
    <main className="bg-white text-black h-screen p-5">
      <h1>Components Library</h1>
      <Section title="Section 1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora
          ut pariatur blanditiis, exercitationem libero! Minima modi, cum
          nostrum officia repudiandae a eligendi ab cupiditate ex autem labore
          sint! Porro!
        </p>
      </Section>

      <Section title="Section 2">
        <h3>Subheader</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
          illo. Labore nesciunt sequi quisquam qui, animi unde. Optio ducimus
          aspernatur eaque modi cumque? Sit quam ipsum totam, velit quaerat
          nihil.
        </p>
      </Section>

      <Section title="Buttons">
        <div className="grid grid-cols-4">
          <Button text="Click me!" />
          <Button
            text="Submit"
            type="submit"
            onClick={() => console.log("Submit")}
          />

          <Button
            text="Submit"
            type="reset"
            onClick={() => console.log("reset")}
          />
          <Button
            text="Disabled"
            type="reset"
            disabled={false}
            onClick={() => console.log("disabled")}
          />
        </div>
      </Section>
      <Section title="Lab9-AlertBox">
           <AlertBox
          type="success"
          message="We did it"
         onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
       
       
        <AlertBox
          type="error"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="warning"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="info"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      </Section>

      <Section title="Lab9-UserProfileCard">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(id) => {
            console.log(`Editing userid# ${user.id}`);
            alert(`Editing user ${id}`);
          }}
        ></UserProfileCard>
      </Section>

      <Section title="Lab9-ProductDisplay">
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          // onAddToCart={(productId) => {
          //   alert(`Product with ID ${productId} added to cart.`);
          // }}
          
          onAddToCart={handleAddToCart}
        >
          <div className="text-md text-gray-500">Free shipping available</div>
        </ProductDisplay>
      </Section>
    </main>
  );
}

export default App;
