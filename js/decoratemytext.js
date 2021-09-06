var flag=0;
function bigger(){
    if (flag == 0){
        document.getElementById("textval").style.fontSize = "24pt";
         flag=1;
    }
    else{
        document.getElementById("textval").style.fontSize = "";
         flag=0;
    }
}
const checkbox = document.getElementById('chkb')
function chngcolor()
{
  if (document.getElementById('chkb').checked) 
  {
      document.getElementById("textval").style.fontWeight="bold";
      document.getElementById("textval").style.color="green";
      document.getElementById("textval").style.textDecoration="underline";
  } else {
      document.getElementById("textval").style.color="black";
      document.getElementById("textval").style.textDecoration="";
      document.getElementById("textval").style.fontWeight="";
      
  }
}