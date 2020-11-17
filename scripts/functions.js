export function generateLi(data) {
	let li = document.createElement("li");
		li.classList.add("feedback__item", "feedback");
		li.id = data.id;

		let h3 = document.createElement("h3");
		h3.classList.add("feedback__header", "client-name");
		h3.innerText = data.name;

		let p = document.createElement("p");
		p.classList.add("feedback__text");
		p.innerText = data.feedback;

		li.append(h3, p);
		return li;
}

export function getInputData() {
	return {
		id: document.getElementById("id").value,
		name: document.getElementById("name").value,
		feedback: document.getElementById("feedback").value,
	}
}

export function editFeedback(data) {
	document.getElementById("id").value = data.id;
	document.getElementById("name").value = data.name;
	document.getElementById("feedback").value = data.feedback;
}

export function cleanFeedbackField() {
	feedbackItems.innerHTML = "";
}

export function l(data) {
	console.log(data);
}