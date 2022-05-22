const age=15;
const name = "hammad";
const driving= true;
asd = {
    // key: value
    name: "Mustafa",
    class: 8,
    present: true,
    num: [56,76,65,89]
}

console.log(asd.num);
console.log(asd.num[0]);
console.log(asd);
console.log(asd.present);

// equal, not equal, lessthan, greaterthan, lessthan equal, greaterthan equal,  AND, OR 
//  ==,      != ,       < ,         >           <=  ,              >= ,         && , ||

if( (1 == 0 || 0 <=  2) && 8 == 8){
    console.log("If ");
} else {
    console.log("else ");
}

const marks=[56,76,65,89,1,2,3,4,5,6,8,89,3214300]
console.log(marks);    

//. forEach loop
 marks.forEach(data => {
    console.log("data => " + data );    
});



const number=[1,3,4,5,6,7]
console.log(number.length)


number.forEach(data => {
    console.log("data => " + data );
});
const port=[12,23,445,6667788];
port.forEach(batch => {
    console.log("batch => " + batch )
});

for (let index = 0; index < port.length; index++) {
    const element = port[index];
    console.log(element)
}






if (22==20+2 || 20<10){
    console.log("if");
}else{
    console.log("else");
}
if (2<1!=3==2){
    console.log("if");

}else{
    console.log("else");
}
if((1==1&&2<1)||32>30){
    console.log("true");

}else{ 
    console.log("false");
}
const number=[1,2,3,4,5];
const name= "hammad";
console.log(number);
console.log(name);
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    console.log(element);
    
};
 number.forEach((topi, index) => {
    console.log("topi=> " + topi )    
 });


const number=[1,2,3,4,5, "asd", "qwe", true];
const msg = "kia chalra hay? bhai aaj kl";
const msg1= "   kia chalra hay? bhai aaj kl   ";
console.log(number.length);
number.push("***");
console.log(number);
number.pop()
console.log(number.shift());
console.log(number);
console.log(number.unshift("ALI"));
console.log(number);
console.log(number);
asddds = number.slice(0, 4)
console.log(asddds);
number.splice(0, 4)
console.log(number);
number.splice(2, 5, "Ali", false, 6485222)
console.log(number);
console.log(msg.split("a"));
console.log(msg1.trim());
console.log(msg.substring(2,7));
