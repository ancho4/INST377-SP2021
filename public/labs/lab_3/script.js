/* Put your javascript in here */
let imgArray = ["onigiri_1.png", "onigiri_2.png", "onigiri_3.png", 
"onigiri_4.png", "roll_1.png", "roll_2.png", "roll_3.png"]

imgArray.forEach(element => { 
    const img_item = document.createElement("img");
    img_item.innerText = element; 
})

