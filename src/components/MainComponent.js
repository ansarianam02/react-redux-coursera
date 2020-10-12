import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import {Contact} from 'ContactComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);    
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish.id});
  }

  render() {
        const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    console.log(LEADERS)
    return (      
        <div>
        <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>} />
               <Route exact path='/contactus' component={Contact} />
          
               <Route path='/contactus' component={Contact} />
              
              <Redirect to="/home" />
          </Switch>
           
          <Footer />
        </div>
    );
  }
}
/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/
export default withRouter(connect(mapStateToProps)(Main));