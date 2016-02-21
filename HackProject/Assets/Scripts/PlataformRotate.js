#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(1, 0, 0);
}

function OnTriggerEnter (other : Collider)
{
    if (other.attachedRigidbody)
    {
        other.attachedRigidbody.useGravity = false;
    }
}

GetComponent.<Collider>().isTrigger = true;