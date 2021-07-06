var weight=[22,24,26,28,30]
function setup() 
{
  createCanvas(400,400);
  average();
}

function draw() 
{
background(51);

}
function average(){
  var sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]
  var avg=sum/weight.length
  console.log(avg)
}
