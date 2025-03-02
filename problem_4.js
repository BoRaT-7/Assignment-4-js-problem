function calculateFinalScore (obj){
    if(typeof obj !== "object" || obj === null || Array.isArray(obj)){
        return "Invalid Input";
    }
    let {name,testscrore,schoolgrade,isfamily } = obj;

    if (typeof name!=="string" || typeof testscrore !== "number" || testscrore >50 || typeof schoolgrade !== "number" || schoolgrade > 30 || typeof isfamily !=="boolean"){
        return "Invalid Input";
    }
    let finalscore = testscrore + schoolgrade + (isfamily ? 20:0);
    return finalscore >= 80;
}
console.log(calculateFinalScore({name:"Rajib",testscrore:45,schoolgrade:25, isfamily:true}));
console.log(calculateFinalScore({name:"Rajib",testscrore:45,schoolgrade:25,isfamily:false}) );
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore ({name:"Rajib", testscrore:15,schoolgrade:25, isfamily:true}));

