/*
    Name: Mohamed Izzat Khair Bin Mohamed Noor
    Email: mohamedik.2019
*/

// YOUR CODE GOES HERE
function callApi(url, callback,async,extra=null){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.responseText).records,extra);
      }
    };
    xhttp.open("GET", url, async);
    xhttp.send();
}


function dropdown(){
    /* ASSUMPTION
       Assuming that the API Could return Oscars for
       current decade 2020 and beyond in the future.
   */
    var curryear=new Date().getFullYear();
    var roundyear=((Math.round(Number(curryear) / 10) -1) * 10);
    var startyear=1920;
    while(roundyear>=startyear){

        var url="../api/winner/search.php?d="+startyear;
        callApi(url,populateDropdown,false,startyear);
        startyear+=10;
    }
}


function populateDropdown(data,year){
    var totalCount=Number(data.length)
    var dropdown=document.getElementById('dropdownmenu');
    dropdown.innerHTML+=`
    <a class="dropdown-item" onclick="cardsYear('${year}')">
        ${year}
        <span class="badge badge-pill badge-warning">
            ${totalCount}
        </span>
    </a>`;
}


function cards(){
    var url="../api/winner/read.php";
    callApi(url,populateCards,true);
}   


function cardsYear(year){
    var url=`../api/winner/search.php?d=${year}`;
    callApi(url,populateCards,true);
}


function populateCards(data,extra){
    var str="";
    for(winner of data){
       str+=`
            <div class="card mt-2" style="">
                <img src="../api/images/${winner.others.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${winner.bio.name}</h5>
                    <p class="font-weight-bold m-0">${winner.movie.title} (${winner.movie.year})</p>
                    <p class="card-text m-0"><em>${winner.movie.description}</em></p>
                </div>
            </div>
        `;
    }
    document.getElementById('displayCards').innerHTML=str;
}







