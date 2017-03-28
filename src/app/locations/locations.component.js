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

export const LocationsComponent = {
    template: require('./locations.template.html'),
    controllerAs: 'locationsCtrl',
    controller: locationsController,
    bindings: {
        company: '<',
        onSelected: '&'
    }
};