#pragma strict

private var player: Transform;

private var maxSpeed : float = 10;
private var periode : float = 1.5;

private var time : float = 0;

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
	time += Time.deltaTime; // delatatime = tiempo que ha tardado el frame anterior en ejecutarse
	//enemy = GameObject.FindGameObjectWithTag("NormalSphere").GetComponent.<Rigidbody>();
	//Debug.Log(time);
	//Debug.Log(periode);
	if (time > periode) {
		time = 0;
		var speed : float = Random.Range (3.0f, maxSpeed);
		var offsetZ : float = Random.Range (-3.0, 0.0);
		var offsetX : float = Random.Range (0.0, 15.0);
		var sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	    sphere.AddComponent.<Rigidbody>();
	    sphere.transform.position = Vector3 (offsetX, 4, offsetZ);
	    sphere.GetComponent.<Rigidbody>().velocity = -transform.up*speed;
	    sphere.GetComponent.<Rigidbody>().useGravity = false;
	}
}