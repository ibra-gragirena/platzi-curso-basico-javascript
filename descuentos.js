function calculateDiscountPrice(price, discount){
    const percentagePriceDiscount = 100 - discount;
    const discountPrice = (price * percentagePriceDiscount) / 100;

    return discountPrice; 
}


const coupons = [
   {
    name : "NuncaPares10%",
    discount : 10,
   } ,
   {
    name: "AprenderSiempre20%",
    discount : 20,
   },
   {
    name : "NeverStop30%",
    discount : 30,
   },
];

function onClickButtonPrice() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
  

  //  const inputDiscount = document.getElementById("inputDiscount");
    //const discountValue = inputDiscount.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("Invalid coupon " + "**" + couponValue + "**")
    }
    else {
        const descuento = userCoupon.discount;
        const discountPrice = calculateDiscountPrice(priceValue, descuento);
        
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = discountPrice + "$";
    }
    



}

