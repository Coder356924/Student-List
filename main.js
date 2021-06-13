names=[];
function submit(){
var name_1=document.getElementById("n1").value;
var name_2=document.getElementById("n2").value;
var name_3=document.getElementById("n3").value;
var name_4=document.getElementById("n4").value;


names.push(name_1);
names.push(name_2);
names.push(name_3);
names.push(name_4);

console.log(names);

document.getElementById("display_name").innerHTML=names;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}
function sort(){
    names.sort();
    console.log(names);
    document.getElementById("display_name").innerHTML=names;
}