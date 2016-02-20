using UnityEngine;
using System.Collections;

public class PlayerMove : MonoBehaviour {

	public float speed;

	private Rigidbody rb;
	private int count;

	// Use this for initialization
	void Start () {
		rb = GetComponent<Rigidbody> ();
		count = 0;
	}


	void FixedUpdate () {
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");
		Vector3 jump = new Vector3 (moveHorizontal, 10.0f, moveVertical);
		if (Input.GetKeyDown(KeyCode.Space)) rb.AddForce (jump * speed);

		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);
		rb.AddForce (movement * speed);
    }

    /*void OnTriggerEnter(Collider other) {
		if (other.gameObject.CompareTag ("Pick up")) {
			other.gameObject.SetActive (false);
			count = count + 1;
		}
	}*/
}