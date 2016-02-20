#pragma strict

public var speed : float = 10f;


function Start () {

}

function Update () {
    transform.Rotate(Vector3.right, speed*Time.deltaTime);
}