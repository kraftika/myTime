class locationsController {
    /*ngInject*/
    constructor(locationsService) {
        this.locationDemo = 'Demo location for testing';
        this.locations = [];
        this.locationsService = locationsService;
    }

    $onInit() {
        console.log('Component initialzed: ', this.company.id);
        this.locationsService.getLocationsByCompany(this.company.id)
            .then((response) => {
                console.log(response.data);
                this.locations = response.data;
            });
    }
}

// I was not able to load the template from outside as html file
var template = '<div>Location component and {{locationsCtrl.locationDemo}} and {{locationsCtrl.company.id}}</div>' +
                '<ul ng-repeat="location in locationsCtrl.locations">' + 
                    '<li>' + 
                        '<div>{{location.description || location.company_id}} - {{location.street_address}}</div>' +
                        '<div>{{location.city}}, {{location.state}}</div>' +
                    '</li>' +
                '</ul>';

export const LocationsComponent = {
    template: template,
    controllerAs: 'locationsCtrl',
    controller: locationsController,
    bindings: {
        company: '<'
    }
};