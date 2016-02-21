#pragma strict


#pragma strict
import UnityEngine.UI;

private var finishedTexture : Image;

private var finished : boolean = false;

function Start () {
	finishedTexture.enabled = false;
	Time.timeScale = 2.0;
	
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) && finished) {
		Application.LoadLevel(Application.loadedLevel);
	}
	
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if (hit.gameObject.tag == "Target") {
		finishedTexture.enabled = true;
		finished = true;
		Time.timeScale = 0.0;
	}
}