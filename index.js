function ejercicio(n){    
    //console.log(Math.sqrt(5));

    const x=(3+(Math.sqrt(5)));
    //console.log(x)
    y=x**n;
    z=parseInt(y); 
    a=z.toString();
    i=a.length;
    console.log(i);
    //console.log(a);
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
       
       


        /*
        for(i;i<=3;i++){
            b='0'+a;
            console.log(b)
        }*/
    }
    return b;
    //console.log(a);
    //z.substr(-3);


   


}





console.log(ejercicio(2));
