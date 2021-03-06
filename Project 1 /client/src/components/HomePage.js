import React from "react";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import axios from "axios";

function HomePage (){

  function GetQuestions(){
    axios.get('http://localhost:5001/allquestions').then(resp => {
    SetQuestions(resp.data);
  });
  }
  
  useEffect(() => {
    GetQuestions();
  }, []);

    const username=sessionStorage.getItem('UserName');
    const [question, SetQuestion]=React.useState('');
    const [category, SetCategory]=React.useState('');
    const [questions, SetQuestions] = useState([]);

    

    console.log(questions)
    const SendQuestion = async(evt) => {
        evt.preventDefault();
        try {
          const body={username, question, category};
          const response= fetch("http://localhost:5001/newquestion", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
          })
          window.location.href = 'http://localhost:3000/homepage/'+username;
          sessionStorage.setItem('UserName', response["username"]);
          console.log(response)
        } catch (error) {
          console.error(error.message);
        }
      }
    return (
        <body>
            <form
            class="formpregunta"
            onSubmit = {SendQuestion}
            >
                <textarea name="post" id="post-content" class="question" placeholder="Do you have a question?"
                onChange={(e)=>{SetQuestion(e.target.value)}}>
                </textarea>
                <select name="skills" multiple="" class="ui fluid dropdown" style={{position : "relative", top : '20px', left: '13px', backgroundColor: '#334756', color:'#F0A500'}}
                onChange={(e)=>{SetCategory(e.target.value)}}>
                    <option value="">Categories</option>
                    <option value="technology">Technology</option>
                    <option value="food">Food</option>
                    <option value="design">Art</option>
                    <option value="politics">Politics</option>
                    <option value="carss">Cars</option>
                    <option value="sports">Sports</option>
                    <option value="travel">Travel</option>
                    <option value="news">News</option>
                    <option value="covid">Covid-19</option>
                    <option value="fitness">Fitness</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="science">Science</option>
                    <option value="celebrities">Celebrities</option>
                    <option value="moviestv">Movies and Tv Shows</option>
                    <option value="books">Books</option>
                    <option value="marketing">Marketing</option>
                    <option value="innovation">Innovation</option>
                </select>
                <button class="buttonenviar">Submit question</button>
            </form>
            <div class="li2">
            {questions.map((item) => {
              return (
                  <div class="post2">
                    <b>User:</b> {item.username}
                    <span><br/>{item.question}</span>
                  </div>
              );
            })}
            </div>
          <Navbar>
          </Navbar>
        </body>
    )
}


export default HomePage;
