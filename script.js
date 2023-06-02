// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

function apiCall(apiUrls){
	const startTime = performance.now();
	Promise.all(apiUrls.map((url) =>{
			fetch(url).then(response => response.json())
		.then((data) =>{
			const endTime = performance.now();
            const totalTime = endTime - startTime;
			const outputAll = document.getElementById('output-all');
			const td = document.createElement("td");
			td.textContent = totalTime;
			outputAll.appendChild(td);
		})
		}));

	Promise.any(apiUrls.map((url) =>{
			fetch(url).then(response => response.json());
		}))
}

apiCall(apiUrls);

// You can write your code here
