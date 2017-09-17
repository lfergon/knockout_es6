import './scss/main.scss';
import ko from 'knockout';
import validation from 'knockout.validation';

class CustomerViewModel {
  constructor() {
    // Initial data
    this.reservations = ko.observableArray([
      { customer: 'John Smith', time: '12:01' },
      { customer: 'Jeff Smithe', time: '0:50' },
      { customer: 'Jarrod Smythe', time: '1:00' }
    ]);

    this.customer = ko.observable().extend({
      required: true
    });

    this.time = ko.observable();

    // Bound remove to the constructor as $parent changes the context of this in ES6 classes.
    this.removeReservation = (value) => { 
      this.reservations.remove(value); 
    };

  }

  addReservation() {
    // Get Value from text inputs.
    let name = document.getElementsByName('name')[0].value;
    let time = document.getElementsByName('time')[0].value;

    if (name && time) {
      // Add to Knockout array
      this.reservations.push({ name: name, time: time });
    }

  }

}

ko.applyBindings(new CustomerViewModel());
