import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

import MainController from './main.controller';
import { LocationsComponent } from './locations/locations.component';
import LocationsService from './locations/locations.service'

import { ServicesComponent } from './services/services.component';
import ServicesService from './services/services.service';

import { ModalComponent } from './modal/modal.component';

angular
    .module('bookNow', [uiBootstrap])
    .controller('mainController', MainController)
    .service('locationsService', LocationsService)
    .component('locations', LocationsComponent)
    .service('servicesService', ServicesService)
    .component('services', ServicesComponent)
    .component('modalComponent', ModalComponent);