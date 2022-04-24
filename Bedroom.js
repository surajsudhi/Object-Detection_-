img=""
Status = ""
function preload(){
    img = loadImage('Bedroom.jpg');
    }

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    ObjectDetection = ml5.objectDetector('cocossd', modelLoaded);
    Status = document.getElementById("status").innerHTML = "Detecting objects...";
    }

    function draw(){
    image(img, 0, 0 , 640, 420);
    }

    function modelLoaded(){
    console.log("Model loaded");
     Status = true
     ObjectDetection.detect(img, gotResult);
     }

     function gotResult(error,result){
        if(error){
        console.error(error)    
        }
        else{
        console.log(result)    
        }
        }

