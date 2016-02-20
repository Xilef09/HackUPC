#pragma strict

public var speed : float = 10f;
private var goingUp : int = 1;

function Start () {

}

function Update () {
    if (transform.position.x >= 100){ 
        goingUp = -1;
    }

    else if (transform.position.x <= 1) {
        goingUp = 1;
    }
    transform.position += Vector3.up*speed*Time.deltaTime*goingUp;
}