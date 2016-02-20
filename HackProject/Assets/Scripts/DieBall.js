#pragma strict

public var lifetime : float = 5;

function Start () {
	Destroy(gameObject, lifetime);
}

function onCollisionEnter (col: Collision) {
	 if (col.gameObject.tag == "UpDownWall") {
        //col.gameObject.GetComponent<PlayerDie>().Dead (no se puede porque es privada)
        Destroy(col.gameObject);
    }

}