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