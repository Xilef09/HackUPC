#pragma strict

public var speed : float = 10f;
private var goingUp : int = 1;

function Start () {

}

function Update () {
    //Debug.Log("1");
<<<<<<< HEAD
    if (transform.position.y >= 230){ 
=======
    Debug.Log(transform.position.y);
    if (transform.position.y >= 10){ 
>>>>>>> 3370f264803426d642511bcda732d97d804d6175
        goingUp = -1;
    }

    else if (transform.position.y <= 4) {
        goingUp = 1;
    }
    transform.position += Vector3.up*speed*Time.deltaTime*goingUp;
}