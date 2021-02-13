alert('welcome to alhuseen youth club register form')
var fname = 'mostafa'
console.log('firstname:'+fname);
var age = "23"
console.log(age);
var isafootballplayer = 'true'
console.log(isafootballplayer);
console.log(fname + ',' + age + ' years old ' + isafootballplayer );
var userage = prompt('how old are you');
if(userage >=13){
confirm('you can join us')
document.write('welcome to the castel of trophies')
}
else {
    confirm('you can not join us')
}

var member = prompt('would you become a member of board if directors ?')
if(member=='yes'){
confirm('welcome sir')
}
else{
    confirm('thanks for responding')
}


var asking = prompt('would you see trophies of football or volleyball?')

while(asking !== "football" && asking !== "volleyball" ) 
{
var asking = prompt('would you see trophies of football or volleyball?')

}

var trophies = '';

if(asking == 'football')
{
    trophies = '<img src="footcup.jpg"/>';
}
else {
    trophies = '<img src="volley.jpg"/>';
}
var nuoftrophies = prompt('how many cups do you want to see?');
var num ='';
for(var i= 0;i<nuoftrophies;i++)
{
num = num + trophies ;

}
document.write(num);
































