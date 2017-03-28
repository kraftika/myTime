class ServicesController {
    /*ngInject*/
    constructor(servicesService) {
        this.services = [];
        this.servicesService = servicesService;
    }

    $onChanges() {
        this.services = [];

        if (this.companyLocation.company && this.companyLocation.location) {
            let companyId = this.companyLocation.company;
            let locationId = this.companyLocation.location;

            this.servicesService.getServices(companyId, locationId)
                .then((response) => {
                    response.data.services.forEach((deal) => {
                        deal.variations.forEach((variation) => {
                            this.services.push({ id: variation.id, name: variation.name});
                        })
                    });
                    
                })
                .catch(function() {
                    console.log('Unable to retrieve services in a specific location');
                });
        }
    }

    isSelected(service) {
        this.onSelected({
            $event: {
                service: service
            }
        });
    }
}

export const ServicesComponent = {
    template: require('./services.template.html'),
    controllerAs: 'servicesCtrl',
    controller: ServicesController,
    bindings: {
        companyLocation: '<',
        onSelected: '&'
    }
};