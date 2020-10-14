/*
    Name: Mohamed Izzat Khair Bin Mohamed Noor
    Email: mohamedik.2019
*/

// YOUR CODE GOES HERE

var calcbtn= document.getElementById('calculatebtn');
calcbtn.addEventListener('click', function(event){calculate(event)});

function calculate(event){

    event.preventDefault();


    var initialamt=document.getElementById('initialamtinput').value;
    var yearlyint= document.getElementById('yearlyintinput').value;
    var goalamt= document.getElementById('mygoalinput').value;

    var curramt=initialamt;
    var year=0;
    if(Number(goalamt)>curramt){  
        while(curramt<goalamt){
            curramt*=(1+(yearlyint/100));
            year+=1
        }
    }
    
    /* ASSUMPTION
       If the current amt inputted is more than 
       0 then will display year else will display -
    */
    var str=`
        <h4 class="text-success">Result</h4>
        <table class="table table-bordered">
            <tr>
                <th scope="row">You will achieve your goals in (years)</th>
                <td>${curramt>0?year:'-'}</td>
            </tr>
            <tr>
                <th scope="row">You will get ($):</th>
                <td>${Number(curramt).toFixed(2)}</td>
            </tr>
        </table>`

    document.getElementById('results').innerHTML=str;

}
