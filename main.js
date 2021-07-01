function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('Mobilenet', modelLoaded);
}

function draw(){
  image(video, 0, 0, 300,300);
  classifier.classify(video, gotResult);
}

function modelLoaded(){
console.log(ModelLoaded);
}

function gotResult(error,result){
  if (error){
    console.error(error);
  }
  else{
console.log(result);
document.getElementById("pink_object").innerHTML = result[0].label;
document.getElementById("pink_accuracy").innerHTML = result[0].confidence.toFixed(3);

  }
}