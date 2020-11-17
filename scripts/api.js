const api = "http://176.104.3.155:3000/feedbacks";

export async function getData() {
	let response = await fetch(api)
	return await response.json();	
} 

export function postData(data) {
	fetch(api, {
		method: "POST",
		headers: {
			"Content-Type": "application/json()"
		},
		body: data
	})
		.then(response => response.json())
}

export function deleteData() {
	fetch(api, {
		method: "DELETE"
	})
		.then(response => response.json())
		.then(data => console.log(data))	
}