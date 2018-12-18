import './styles/main.scss';
import app from './js/App.js'


function component() {
  app();
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./js/App.js', function() {
    console.log('Accepting the updated printMe module!');

    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}