using UnityEngine;
using System.Collections;

public class Teleport3cs : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter (Collider other)
	{
		other.transform.position = new Vector3(22,1,60);
	}
}
