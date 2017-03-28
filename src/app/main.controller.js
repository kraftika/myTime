export default class MainController {
    /*ngInject*/
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    openComponentModal() {
        var modalInstance = this.$uibModal.open({
            animation: true,
            component: 'modalComponent',
        });

        modalInstance.result.catch(() => {
            console.log('modal-component dismissed at: ' + new Date());
        });
    }
}