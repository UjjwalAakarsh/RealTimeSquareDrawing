function setup(){
video=createCapture(VIDEO)
video.size(500,500)
canvas=createCanvas(500,500)
canvas.position(750,200)
video.position(200,200)
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function preload(){

}
function draw(){

}
function modelloaded(){
    console.log("Model Loaded")
}
function gotposes(results){
    if(results.length >0){
        console.log(results)
    }
}