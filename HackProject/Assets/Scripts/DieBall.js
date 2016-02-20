#pragma strict

public var lifetime : float = 5;

function Start () {
	Destroy(gameObject, lifetime);
}