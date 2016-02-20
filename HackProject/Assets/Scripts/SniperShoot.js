#pragma strict

public var enemy: Rigidbody;
private var maxSpeed : float = 10;
private var periode : float = 1.5;

private var time : float = 0;

function Start() {
	//var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
    //cube.AddComponent.<Rigidbody>();
    //cube.transform.position = Vector3 (14, 3, -3);
    //enemy = GameObject.FindGameObjectWithTag("NormalSphere").GetComponent.<Rigidbody>();

}

function Update () {
	time += Time.deltaTime; // delatatime = tiempo que ha tardado el frame anterior en ejecutarse
	//enemy = GameObject.FindGameObjectWithTag("NormalSphere").GetComponent.<Rigidbody>();
	if (time > periode) {
		time = 0;
<<<<<<< HEAD
		var speed : float = 3.0f;
		var position : Vector3 = transform.position + Vector3(0, 0, 3);
=======
		var speed : float = Random.Range (3.0f, maxSpeed);
		var position : Vector3 = transform.position;// + Vector3(0, 0, 3);
		//var position : Vector3 = transform.position + Vector3(0, 0, 3);
>>>>>>> 4a30899c56675bfb534e204eb3e90403a2f21b3b
		var instantiatedenemy : Rigidbody =
			Rigidbody.Instantiate(enemy, 
				transform.position, transform.rotation);
				
		
		instantiatedenemy.velocity = 
			transform.forward*speed;
		/*time = 0;
		//Log.d("hola");
		var speed : float = Random.Range (0.0f, maxSpeed);
		var offsetZ : float = Random.Range (-4.0, 4.0);
		var offsetY : float = Random.Range (-3.0, 3.0);
		
		var position : Vector3 = transform.position + Vector3(0, offsetY, offsetZ);*/
		
		/*var instantiatedEnemy : Rigidbody = 
			Rigidbody.Instantiate(enemy, 
				position, transform.rotation);
				
		instantiatedEnemy.velocity = -transform.up*speed;*/	
		/*var sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
    	sphere.AddComponent.<Rigidbody>();
    	sphere.transform.position = Vector3 (6.048581, 1.51, -6);
    	sphere.GetComponent.<Rigidbody>().velocity = transform.forward*maxSpeed;
    	sphere.GetComponent.<Rigidbody>().useGravity = false;*/
    	//sphere.GetComponent.<Rigidbody>().AddForce(Physics.gravity * GetComponent.<Rigidbody>().mass);
	}
}