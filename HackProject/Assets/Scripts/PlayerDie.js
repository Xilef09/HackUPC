#pragma strict


function Update () {
    if (transform.position.y <= -20)
    {
        Application.LoadLevel(Application.loadedLevel);
    }
}

function OnCollisionEnter (col : Collision) {
    if (col.gameObject.tag == "magma") {
    	Debug.Log("Collision");
        Application.LoadLevel(Application.loadedLevel);
        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
    }
}

function OnCollisionStay(collisionInfo : Collision) {
		if (collisionInfo.gameObject.tag == "magma") {
	    	Debug.Log("Collision");
	        Application.LoadLevel(Application.loadedLevel);
	        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
	    }
	}

function OnCollisionExit (collisionInfo : Collision) {
		// Debug-draw all contact points and normal
		if (collisionInfo.gameObject.tag == "magma") {
	    	Debug.Log("Collision");
	        Application.LoadLevel(Application.loadedLevel);
	        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
	    }
	}

function OnControllerColliderHit (hit : ControllerColliderHit) {
// Debug-draw all contact points and normal
		if (hit.gameObject.tag == "magma") {
	    	Debug.Log("Collision");
	        Application.LoadLevel(Application.loadedLevel);
	        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
	    }
	}