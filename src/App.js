import React, { Component } from 'react';
import ImageCard from "./components/Board/board";
import './App.css';
import images from './images.json';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Counter from './components/Counter/counter.js';

class App extends Component {
  state = {
    images
};

  render() {
    return (
       <div>
       <Header />
       <Counter />
       <Wrapper>
          {this.state.images.map(image => (
           <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
          ))};
        </Wrapper>
         </div>
        
    );
  }
}

export default App;
