function ejercicio(n){    
    const x=(3+(Math.sqrt(5)));
    y=x**n;
    z=parseInt(y); 
    a=z.toString();
    i=a.length;
    console.log(i);
    if (i>3){
        b=a.substr(-3)  
    } else {
        if (i=1){
            console.log(i)
            console.log(a)
            b='00'+a;
        }else{
            if(i=2){
                console.log(i)
                console.log(a)
                b='0'+a;

            }
        }
    }
    return b;

}

console.log(ejercicio(2));
