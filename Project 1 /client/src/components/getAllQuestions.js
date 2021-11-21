

const getAllQuestions = [
    fetch('http://localhost:5001/allquestions')
        .then(function(response) {
          return response.json();
        })
]


export default getAllQuestions;