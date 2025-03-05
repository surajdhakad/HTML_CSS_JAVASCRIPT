function calcAmount()
{
  let p,r,t,iamt,tamt;	//local vars

  //data coll
  p=+pamt.value;
  r=+roi.value;
  t=+time.value;
  
  //calc's
  iamt=p*t*r/100;
  tamt=p+iamt;
  
  //display op's
  intAmt.innerHTML="Interest Amount	&#8377;"+iamt; 
  totAmt.innerHTML="Total Amount &#8377;"+tamt;
}