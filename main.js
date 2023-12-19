axisX=0;
axisX=0;

function preload(){
    ImageMo = ('https://i.postimg.cc/13M0Lzt9/Color.jpg')
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = m15.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses);
}

axisX = results[0].pose.nose.x
axisY = results[0].pose.nose.y


function modelloaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("X axis =" + axisX);
        console.log("Y axis =" + axisY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(axisX , axisY , 20)
    image(ImageMo, axisX, axisY , 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png'); 
}