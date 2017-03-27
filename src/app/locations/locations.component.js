class locationsController {
    /*ngInject*/
    constructor(locationsService) {
        this.locationDemo = 'Demo location for testing';
        this.locations = [];
        this.locationsService = locationsService;
    }

    $onInit() {
        this.locationsService.getLocationsByCompany(this.company.id)
            .then((response) => {
                this.locations = response.data;
            })
            .catch(function() {
                console.log('Unable to retrieve locations');
            });
    }

    isSelected(location) {
        this.onSelected({
            $event: {
                location: { 
                    id: location.id
                }
            }
        });
    }
}

// I was not able to load the template from outside as html file. I suspect webpack configuration is missing
var template = '<ul ng-repeat="location in locationsCtrl.locations">' + 
                    '<li ng-click="locationsCtrl.isSelected(location)">' + 
                        '<div>{{location.description || location.company_id}} - {{location.street_address}}</div>' +
                        '<div>{{location.city}}, {{location.state}}</div>' +
                    '</li>' +
                '</ul>';

export const LocationsComponent = {
    template: template,
    controllerAs: 'locationsCtrl',
    controller: locationsController,
    bindings: {
        company: '<',
        onSelected: '&'
    }
};