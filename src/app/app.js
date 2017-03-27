import angular from 'angular';

import { LocationsComponent } from './locations/locations.component';
import MainController from './main.controller';
import LocationsService from './locations/locations.service'

angular
    .module('bookNow', [])
    .service('locationsService', LocationsService)
    .controller('mainController', MainController)
    .component('locations', LocationsComponent);