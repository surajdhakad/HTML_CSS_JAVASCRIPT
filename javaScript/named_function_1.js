function add(x,y)  //parameter are used transporting the data
{
    let n;                                        //local varible are use storig data

    return x+y;              //
}


function isprime(n)
{
      let flag=true;
    
      for(let i=2;i<=n/2;i++){
        if(n%i==0){
            flag=false
            break;
        }
      }
     // return flag;
        return flag? "prime number" :"not prime";
      

}