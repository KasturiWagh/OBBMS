// javascript code for search bar
function search_Btype() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('Btype');
    let y = document.getElementsByClassName('a');
    console.log(y);
  
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none";
        } 
        else {
            y[i].style.display= "table-row";             
        }
    }
}