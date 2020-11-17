import { getData, postData, deleteData } from "../scripts/api.js"
import { generateLi, getInputData, cleanFeedbackField, editFeedback, l } from "../scripts/functions.js"

let feedbackItems = document.getElementById("feedbackItems");

	document.onload = print(getData());


	feedbackItems.addEventListener("click", (e) => {
		let id;
		
		if(e.target.closest("li")) {
			id = e.target.closest("li").id
		}

		(async function(){
			let response = await getData();
			
			response.forEach(e => {
				if(e.id === Number(id)) {
					editFeedback(e)
				}
			})
		}()) 
	});


deleteData()



async function print(data) {
	let result = await data;
	
	cleanFeedbackField()
	
	result.reverse().forEach(e => {
		feedbackItems.append(generateLi(e))
	});
}