class calculator{
    constructor(a,b){
        this.num1 = a
        this.num2 = b
    }
    add(){
        console.log("addition");
        return{
        a:this.num1,
        b:this.num2,
        result:this.num1+this.num2,
        type:"Add"
    }
}
Sub(){
    console.log("subtraction");
    return{
        a:this.num1,
        b:this.num2,
        result:this.num1-this.num2,
        type:"Sub"
    }
}
multiply(){
    console.log("multiply");
    return{
        a:this.num1,
        b:this.num2,
        result:this.num1*this.num2,
        type:"multiply",

    }
}
divide(){
    console.log("divide");
    return{
        a:this.num1,
    b:this.num2,
        result:this.num1/this.num2,
        type:"divide"
    }
}
}
class Cal extends calculator{
    constructor(a,b){
        super(a,b)
        this.myCalculations=[]
    }
    doAddition(a,b){
        const result = this.add(a,b)
        this.myCalculations.push(result)
    }
    doSubtractions(a,b){
        const result = this.Sub(a,b)
        this.myCalculations.push(result)
    }
    domultiply(a,b){
        const result = this.multiply(a,b)
        this.myCalculations.push(result)
    }
    dodivide(a,b){
        const result = this.divide(a,b)
        this.myCalculations.push(result)
    }
}

const a1 = new Cal(23,54)
a1.doAddition(23,54)
a1.doSubtractions(23,54)
a1.domultiply(23,54)
a1.dodivide(23,54)

console.log("all calculations")
console.log(a1.myCalculations);
