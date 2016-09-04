import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Cards } from '../../imports/collections/cards';
import CardDetail from './card-detail';

var skip;
const LIMIT = 1;

class CardReview extends Component {
  componentWillMount() {
    skip = 0;
  }

  handleButtonClick() {
    skip += 1;
    Meteor.subscribe('cards', skip, LIMIT);
  }

  render(){

    return (
      <div>
        <div>
          {this.props.cards.map(card =>
            <CardDetail key={card._id} card={card} />
          )}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
            className="btn btn-primary">
            Next card...
        </button>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('cards', skip, LIMIT);

  return { cards: Cards.find({}).fetch() };
}, CardReview);
