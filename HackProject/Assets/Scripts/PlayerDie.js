#pragma strict


function Update () {
    if (transform.position.y <= -20)
    {
        Application.LoadLevel(Application.loadedLevel);
    }
}