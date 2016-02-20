#pragma strict


function Update () {
    if (transform.position.y <= -10)
    {
        Application.LoadLevel(Application.loadedLevel);
    }
}