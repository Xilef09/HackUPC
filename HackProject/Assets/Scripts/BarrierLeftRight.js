#pragma strict

public var speed : float = 10f;
private var goingRight : int = 1;

function Start () {

}

function Update () {
    //Debug.Log("1");
    if (transform.position.z >= 4.0){ 
        goingRight = -1;
    }

    else if (transform.position.z <= -2.5f) {
        goingRight = 1;
    }
    transform.position += Vector3.forward*speed*Time.deltaTime*goingRight;
}