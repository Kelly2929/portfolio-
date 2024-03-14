import React from 'react';

class FavoriteColor extends React.Component {
  state = {
    favoriteColor: 'red', 
  };

 
  shouldComponentUpdate(nextProps, nextState) {
    return true; 
  }

  componentDidMount() {
   
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
 
    console.log('after update');
  }

  changeColor = () => {
  
    this.setState({ favoriteColor: 'blue' });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default FavoriteColor;
