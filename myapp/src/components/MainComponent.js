import React , { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes:DISHES,
      selectedDish: null
    };
  }
  render(){
  return (
    <div>
      <Navbar dark color="primary">
      <div className='container'><NavbarBrand href="dribble">login  </NavbarBrand>
      </div></Navbar>  
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />      
    </div>
  );
}
}
export default Main;
