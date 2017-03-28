// import { ModalComponent } from './modal/modal.component';

export default class MainController {
    /*ngInject*/
    constructor($uibModal) {
        this.company = { 
            id: 40426 
        };

        this.location = null;
        this.companyLocation = {};
        this.locationSelected = false;

        this.$uibModal = $uibModal;
        this.items = ['item1', 'item2'];
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

    ok() {
        console.log('OK');
    }

    cancel() {
        console.log('cancel');
    }

    openComponentModal() {
        var modalInstance = this.$uibModal.open({
            animation: true,
            component: 'modalComponent',
            resolve: {
                items: function () {
                    return ['unu', 'doi'];
                }
            }, 
            company: this.company
        });

        modalInstance.result.then(function (selectedItem) {
            this.selected = selectedItem;
        }, function () {
            console.log('modal-component dismissed at: ' + new Date());
        });
    }
}