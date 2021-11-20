import React from "react";
import Navbar from "./Navbar";


function HomePage (){
    return (
        <body>
            <Navbar>
            </Navbar>
            <form class="formpregunta">
                <textarea name="post" id="post-content" class="question" placeholder="Do you have a question?">
                </textarea>
                <select name="skills" multiple="" class="ui fluid dropdown" style={{position : "relative", top : '20px', left: '13px'}}>
                    <option value="">Categories</option>
                    <option value="angular">Technology</option>
                    <option value="css">Food</option>
                    <option value="design">Art</option>
                    <option value="ember">Politics</option>
                    <option value="html">Cars</option>
                    <option value="ia">Sports</option>
                    <option value="javascript">Travel</option>
                    <option value="mech">News</option>
                    <option value="meteor">Covid-19</option>
                    <option value="node">Fitness</option>
                    <option value="plumbing">Design</option>
                    <option value="python">Business</option>
                    <option value="rails">Hot Topics</option>
                    <option value="react">Celebrities</option>
                    <option value="repair">Movies and Tv Shows</option>
                    <option value="ruby">Books</option>
                    <option value="ui">Marketing</option>
                    <option value="ux">Innovation</option>
                </select>
                <button class="buttonenviar">Submit question</button>
            </form>
        </body>
    )
}

export default HomePage;