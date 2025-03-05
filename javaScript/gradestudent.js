
//defining a function to find grade of student
function getResult(){

    let hm,cm,bm,tot,avg,grd; //local var

    //data col

    hm=+htmlMarks.value;
    cm=+cssMarks.value;
    jm=+jsMarks.value;
    bm=+bootstrapMarks.value;


    //cal'c


    tot=hm+cm+jm+bm;
    avg=tot/4;


    //chekking pass or not


    if(hm>39&&cm>39&&jm>39&&bm>39){
        //pass

        grd=avg>=90?'A+':avg>=80?'A':avg>70?'B+':avg>=60?'B':avg>=50?'C+':avg>=40?'C': 'D';
    }
    else{
        grd='fail';
    }

    total.value="total mark :"+tot;
    average.value="average :"+avg;
    grade.value="grade :"+grd;
}


