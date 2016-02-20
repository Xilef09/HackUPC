#pragma strict

private var player: Transform;

//private var offset : Vector3;

function Start () {
	player = GameObject.FindGameObjectWithTag("Player").transform;
}
/*
function LateUpdate () {
	transform.position = player.transform.position + offset;
}*/

function Update () {
	/*var aux : Vector3 = 4 * player.up - 3.0 * player.forward;
	transform.position = player.position + aux;
	transform.LookAt(player, player.up);*/
}