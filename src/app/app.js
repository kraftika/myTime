import angular from 'angular';

import {locations} from './locations/locations';
import MainController from './mainController';

angular
    .module('bookNow', [])
    .controller('mainController', MainController)
    .component('locations', locations);