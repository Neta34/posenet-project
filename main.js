noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Model Initialised');
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.x;
        console.log("NoseX = " + noseX + "NoseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        righttWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX = " + leftWristX + "RightWristX" + rightWristX + "Difference = " + difference);

    }
}