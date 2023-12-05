let allButtons= document.querySelectorAll('.button');
let cartValue=document.getElementById('cart-value');
let cartIcon=document.getElementById('cart');

//Storing Data of Every Items
const itemData=[
    {
        name:"This was our pact",
        quantity:0,
        prize:7.49,
    },
    {
        name:"The famous five",
        quantity:0,
        prize:4.59
    },{
        name:"Matlida",
        quantity:0,
        prize:6.80
    },{
        name:"Harry Potter",
        quantity:0,
        prize:10
    },
    {
        name:"For Young Readers",
        quantity:0,
        prize:7.29
    },{
        name:"Wimpy Kid - DIY",
        quantity:0,
        prize:4.99
    },{
        name:"Dart Board",
        quantity:0,
        prize:17.49
    },{
        name:"Connect 4",
        quantity:0,
        prize:19.99
    },
    {
        name:"Jenga",
        quantity:0,
        prize:20.99
    },
    {
        name:"Monopoly",
        quantity:0,
        prize:19.49
    },
    {
        name:"bookmarks",
        quantity:0,
        prize:12.49
    },
    {
        name:"Birthday card",
        quantity:0,
        prize:19.99
    },
    {
        name:"Stuffed toys",
        quantity:0,
        prize:15.99
    },
    {
        name:"Dream catcher drawing",
        quantity:0,
        prize:18.49
    },
]

//To store clicked items
let storingCartItems=[]

let count=0;

allButtons.forEach(function(element,index){
   element.addEventListener('click',function(){
    
    //Keeping count of items clicked
    count=count+1;
    
    //Updating Cart Value
    cartValue.textContent=count;
    
    //Increasing the quantity value
    itemData[index].quantity=itemData[index].quantity+1;
    
    //If the clicked item is not present then we will push the selected item data
    if(!storingCartItems.includes(itemData[index])){
        storingCartItems.push(itemData[index]);
    }

  });
});

//To store the price value
var ItemPriceValue=0;

//Creating function to console the details of cart
cartIcon.addEventListener('click',function(){
    for(let i=0;i<storingCartItems.length;i++){
        
        //looping through the array of objects 
        let ItemObjectTitle = storingCartItems[i].name;
        let ItemObjectQuantity = storingCartItems[i].quantity;
        
        //Adding the price value of cart items! 
        ItemPriceValue += storingCartItems[i].quantity*storingCartItems[i].prize;

        console.log(`Items: ${ItemObjectTitle} -Quantity: ${ItemObjectQuantity}`)
    }
    console.log(`The Total Amount is ${ItemPriceValue}$`)
})

