using UnityEngine;
using System.Collections;

public class Teleportcs : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter (Collider other)
	{
		other.transform.position = new Vector3(22,1,21);
	}
}
