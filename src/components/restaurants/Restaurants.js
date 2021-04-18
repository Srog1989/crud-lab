import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  restaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>)
   }

  render() {

    return(
      <ul>
        {this.restaurants()}
      </ul>
    );
  }
};

export default Restaurants;