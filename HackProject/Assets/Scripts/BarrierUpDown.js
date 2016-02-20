#pragma strict

public var speed : float = 10f;
private var goingUp : int = 1;

function Start () {

}

function Update () {
    if (transform.position.x >= 100){ 
        goingUp = -1;
    }

<<<<<<< HEAD
    else if (transform.position.x <= 1) {
=======
    else if (transform.position.y <= 4) {
>>>>>>> 4a30899c56675bfb534e204eb3e90403a2f21b3b
        goingUp = 1;
    }
    transform.position += Vector3.up*speed*Time.deltaTime*goingUp;
}