#pragma strict

public var speed : float = 10f;
private var goingUp : int = 1;
public var enemy: Rigidbody;
private var maxSpeed : float = 10;
private var periode : float = 0.5;

private var time : float = 0;

function Start () {

}

function Update () {
	if (transform.position.x >= 20){ 
        goingUp = -1;
        //transform.rotation = Quaternion.AngleAxis(180, Vector3.forward);
        //transform.rotation = Quaternion.AngleAxis(270, Vector3.up);
        //transform.rotation = Quaternion.AngleAxis(270, Vector3.right);
        transform.rotation = Quaternion.Euler(270, 270, 0);
        //transform.Rotate(0, 180, 0);
    }

    else if (transform.position.x <= -20) {
        goingUp = 1;
        transform.rotation = Quaternion.Euler(270, 90, 0);
        //transform.rotation = Quaternion.AngleAxis(-180, Vector3.forward) + Quaternion.AngleAxis(270, Vector3.up) + Quaternion.AngleAxis(270, Vector3.forward);
        //transform.rotation = Quaternion.AngleAxis(270, Vector3.up);
        //transform.rotation = Quaternion.AngleAxis(270, Vector3.forward);
        //transform.Rotate(0, 180, 0);
    }

    transform.position += Vector3.right*speed*Time.deltaTime*goingUp;

    time += Time.deltaTime; // delatatime = tiempo que ha tardado el frame anterior en ejecutarse
	//enemy = GameObject.FindGameObjectWithTag("NormalSphere").GetComponent.<Rigidbody>();
	if (time > periode) {
		time = 0;
		var speed2 : float = Random.Range (3.0f, maxSpeed);
		var position : Vector3 = transform.position;

		var instantiatedenemy : Rigidbody =
			Rigidbody.Instantiate(enemy, 
				position, transform.rotation);
			
		
		instantiatedenemy.velocity = 
			transform.forward*speed2*-1;
	}
}