import {useState} from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { RootState } from "../store";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


toast.configure();


export function Package(

  props:{
    purchased:()=>void
  }
) {
  const [product,setProduct] = useState({
    name: "1 Time Package",
    price: 20000,
    description: "Enjoy 1 time"
  });


 

  const tokenForLogin = useSelector((state: RootState) => state.auth.token)


  async function handleToken(token:Token) {

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/checkout`,
      {method: "POST",
       headers: {
        "Content-Type": "application/json",
          'Authorization': 'Bearer ' + tokenForLogin
       },
       body:  JSON.stringify({token,product})
    })
    let result = await res.json();

    
    if (result.msg ==="Success") {
      toast("  ✅  Success! Check for details", { type: "success" });
      props.purchased()
    } else {
      toast.error(" 😵‍💫 Something went wrong", { type: "error" });
    }
  }

  return (
    
  
    <div className="container">
        
      {/* <div className="product">
        <h1>1 times package</h1>
        <h3>On Sale $1</h3>
       
      </div>

      <div className="product">
        <h1>5 times package</h1>
        <h3>On Sale $5</h3>
        <button className="btn btn-info mr-3">Select</button>
      </div>

      <div className="product">
        <h1>10 times package</h1>
        <h3>On Sale $10</h3>
        <button className="btn btn-info mr-3"
        >Select</button>
      </div> */}


        

      <div className="pricingTable">
        <h2 className="pricingTable-title">Find a plan that's right for you.</h2>
        <h3 className="pricingTable-subtitle">Let's go checkout of <span className="product">{product.name}</span> at <span className="product">${product.price/100}  </span></h3>
        <StripeCheckout
              stripeKey="pk_test_51IFWU9DE6NMs9iARtqq7NSUl2f1AUe5tCdCgUBHK1idIStkOTkz6YZ2GNUTh255H2gDRjlvXyd5KGK4ofo9hOEUu00vF4xejjw"
              token={handleToken}
              amount={product.price}
              name={product.name}
              allowRememberMe={false}
              currency="HKD"
            >
  
                <button className="pricingTable-firstTable_table__getstart addCredit">Add Credits</button>
               
                </StripeCheckout>
        
        <ul className="pricingTable-firstTable">
          <li className="pricingTable-firstTable_table">
            <h1 className="pricingTable-firstTable_table__header">Beginner Packege</h1>
            <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>200</span><span></span></p>
            <ul className="pricingTable-firstTable_table__options">
           
              <li>Enjoy one lesson quota</li>
              <li>Access to all types of course</li>
            </ul>
            <div className="pricingTable-firstTable_table__getstart"  onClick={()=>setProduct({
                    name: "1 Time Package",
                    price: 20000,
                    description: "Enjoy 1 time"
              })}>
          Select
            
            </div>
          </li><li className="pricingTable-firstTable_table">
            <h1 className="pricingTable-firstTable_table__header">Competent Packege</h1>
            <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>800</span><span></span></p>
            <ul className="pricingTable-firstTable_table__options">
             
              <li>Enjoy 5 lessons quota</li>
              <li>Access to all types of course </li>
              
            </ul>
            <div className="pricingTable-firstTable_table__getstart"
            
            onClick={()=>setProduct({
              name: "5 Times Package",
              price: 80000,
              description: "Enjoy 5 time"
        })} >Select</div>


          </li><li className="pricingTable-firstTable_table">
            <h1 className="pricingTable-firstTable_table__header">Proficient Packege</h1>
            <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>1500</span><span></span></p>
            <ul className="pricingTable-firstTable_table__options">
         
              <li>Enjoy 10 lessons quota</li>
              <li>Access to all types of course </li>
            </ul>
            <div className="pricingTable-firstTable_table__getstart" onClick={()=>setProduct({
                  name: "10 Times Package",
                  price: 150000,
                  description: "Enjoy 10 time"
            })}>Select</div>
          </li>
        </ul>
      </div>


    </div>
   
  );
}