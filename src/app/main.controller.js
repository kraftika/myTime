import { ModalComponent } from './modal/modal.component';

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

    openComponentModal() {
        var modalInstance = this.$uibModal.open({
            animation: false,
            component: ModalComponent,
            resolve: {
                items: function () {
                    return ['one', 'two', 'three'];
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            this.selected = selectedItem;
        }, function () {
            console.log('modal is dismissed');
        });
    };
}