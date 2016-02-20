#pragma strict

public var speed : float = 10f;
private var goingUp : int = 1;

function Start () {

}

function Update () {
    //Debug.Log("1");
    if (transform.position.y >= 10){ 
        goingUp = -1;
    }

    else if (transform.position.y <= 1) {
        goingUp = 1;
    }
    transform.position += Vector3.up*speed*Time.deltaTime*goingUp;
}