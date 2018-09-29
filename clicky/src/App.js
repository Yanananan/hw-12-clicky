import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            imgLinks: [
                "./images/1.jpg",
                "./images/2.jpg",
                "./images/3.jpg",
                "./images/4.jpg",
                "./images/5.jpg",
                "./images/6.jpg",
                "./images/7.jpg",
                "./images/8.jpg",
                "./images/9.jpg"
            ],
            imgSelected: [],//memory array, to keep track of what's been clicked
            score: 0,
            highScore: 0
        }

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick (event) {
        // 1. check if image link is in imgSelected
        //     a. if yes, then end game
        //     b. if no, then continue
        // 2. shuffle image
        // 3. up score 
        if (this.state.imgSelected.includes(event)){
            //end game, record score as high score, reset score, reset memory array
            this.setState({
                highScore: this.state.score,
                score:0,
                imgSelected:[]
            })

        } else {
            console.log("event");
            console.log(event);
            let arr = [...this.state.imgSelected,event];
            console.log("arr");
            console.log(arr);
            this.setState({
                imgSelected: arr
            })
            this.shuffle(this.state.imgLinks);
            this.upScore(this.state.score);
            
        }
    }

    shuffle (array) {
        
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({
            imgLinks: array
        })
          
    }

    upScore (num) {
        this.setState({
            score:num+1
        })
    }

    render() {
        console.log("state", this.state);

        return (
        <div className="App">
            <div>
                {<div>Score: {this.state.score}</div>}
                {<div>High Score: {this.state.highScore}</div>}
                {this.state.imgLinks.map(image => <img src={image} onClick={()=>this.handleClick(image)}/>)}
            </div>
        </div>
        );
    }
}

export default App;
