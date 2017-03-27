class locationsController {
    constructor() {
        this.locationDemo = 'Demo location for testing';
    }

    $onInit() {
        console.log('Component initialzed: ', this.company.id);
    }
}

export const locations = {
    template: '<div>Location component and {{locationsCtrl.locationDemo}} and {{locationsCtrl.company.id}}</div>',
    controllerAs: 'locationsCtrl',
    controller: locationsController,
    bindings: {
        company: '<'
    }
};