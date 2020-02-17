function foo(msg : string, name? : string){
    let outPut = msg;
    
    if(name){
        outPut = msg + name;
    }
    console.log(`Hey ${outPut}`)

}

export { foo };
