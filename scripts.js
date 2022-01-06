// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");


    takeOffButton.addEventListener("click",function(event){
        if(confirm("Is the shuttle ready for take off?").valueOf()){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
        }
    });

    landingButton.addEventListener("click",function(event){
        window.alert("the shuttle is landing.  Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    missionAbort.addEventListener("click",function(event){
        if(confirm("Confirm that you want to abort the mission.").valueOf()){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.background = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    });

    upButton.addEventListener("click",function(event){
        // let topValStr = 
        // let topInit = Number()
        // let upPos = 
        document.getElementById("rocket").style.top = "130px";
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
        // document.getElementById("rocket").style.top = upPos;
    });

    downButton.addEventListener("click",function(event){
        document.getElementById("rocket").style.top = "160px";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    leftButton.addEventListener("click",function(event){
        document.getElementById("rocket").style.left = "120px";
    });

    rightButton.addEventListener("click",function(event){

        document.getElementById("rocket").style.right = "0px";
    });
}
window.addEventListener("load", init);
