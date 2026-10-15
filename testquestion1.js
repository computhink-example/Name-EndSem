let handPose;
let hands = []; // The model saves what it detects here
let video;  // Image of webcam

function preload(){

    let options = {
        flipped: false,
        runtime: "tfjs",
        modelType: "lite",
        detectorModelUrl: undefined,
        landmarkModeUrl: undefined,
    }

    handPose = ml5.handPose(options);
}

function setup () {

    new Canvas(640, 480);

    let constraints = {
        video:{
            mandatory:{
                midWidth: width,
                minHeight: height
            },
            optional: [{minFrameRate: 60}]
        },
        audio: false,
        flipped: false,
        };  

    video = createCapture(constraints);
    video.size(width, height);
    video.hide();

    handPose.detectStart(video, gotHands);
}

function gotHands(results){
    hands = results;
}

function draw () {
    background("black");

    console.log(hands);
}