function truevalue(a){
    // truevalue is assigned to all buttons except AC, MC and =. a is a parameter used to symbolise all truevalue coming in.
    if(result.value ==0){
        // If result.value is o, which is our default display. Our value should display what is on the truevalue given.
        result.value=a;


    }else{
        // Or else, it should arrange the value of our truevalue which a has been used to symbolise it beside it
        result.value +=a;
    }
}
function operate(op){
    // We used split to make it understand each number entered as a single entity
    if(op.includes("+")){
        let ans =op.split("+");
        return parseInt(ans[0]) + parseInt(ans[1])
    }
    else if(op.includes("-")){
        let ans =op.split("-");
        return ans[0] - ans[1]
    }
    else if(op.includes("*")){
        let ans =op.split("*");
        return ans[0] * ans[1]
    }
    else if(op.includes("/")){
        let ans =op.split("/");
        return ans[0] / ans[1]
    }

}
function totalvalue(){
    result.value=operate(result.value)
}
function clear2(){
    result.value="0";
}
function del(){
    result.value = result.value.slice(0,-1)
}
function percent(a){
    if(pc.includes("%")){
        let ans = pc
        return ans[0] * 100
    }
}
