class ModalController {

    $onInit() {
        this.company = { 
            id: 40426 
        };

        this.companyLocation = {};
        this.location = null;
        this.locationSelected = false;      
    }

    onSelectedLocation(event) {
        this.location = event.location;
        this.companyLocation = {
            company: this.company.id,
            location: event.location.id
        };

        this.locationSelected = true;
    }

    onSelectedService(event) {
        this.service = event.service;
        console.log('Selected service: ', this.service);
    }

    goBack() {
        this.locationSelected = false;
        this.companyLocation.location = null;
    }

    close() {
        this.dismiss({$value: 'closed'});
    }

    getModalTitle() {
        return this.locationSelected ? 'Select a service' : 'Select a location';
    }
}

export const ModalComponent = {
    template: require('./modal.template.html'),
    bindings: {
        close: '&',
        dismiss: '&'
    },
    controller: ModalController,
    controllerAs: 'ctrl'
};