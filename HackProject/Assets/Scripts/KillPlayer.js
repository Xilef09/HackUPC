#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (col : Collision) {
    //Para debuguear: Debug.Log("1");
    if (col.gameObject.tag == "Player") {
    	Debug.Log("Collision");
        Application.LoadLevel(Application.loadedLevel);
        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
    }
}

function OnCollisionStay(collisionInfo : Collision) {
		// Debug-draw all contact points and normals
		if (collisionInfo.gameObject.tag == "Player") {
	    	Debug.Log("Collision");
	        Application.LoadLevel(Application.loadedLevel);
	        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
	    }
	}

function OnCollisionExit (collisionInfo : Collision) {
		// Debug-draw all contact points and normals
		if (collisionInfo.gameObject.tag == "Player") {
	    	Debug.Log("Collision");
	        Application.LoadLevel(Application.loadedLevel);
	        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
	    }
	}