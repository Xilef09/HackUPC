#pragma strict

//public var finishedTexture : Image;

private var finished : boolean = false;

function Start () {
	//finishedTexture.enabled = false;
	Time.timeScale = 2.0;
	
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) && finished) {
		Application.LoadLevel(Application.loadedLevel);
	}
	
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if (hit.gameObject.tag == "End") {
		Debug.Log("FIIIIIN");
		finished = true;
		//Time.timeScale = 0.0;
		Application.LoadLevel(Application.loadedLevel+1);
	}
}