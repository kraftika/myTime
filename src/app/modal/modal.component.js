class ModalController {

    $onInit() {
      this.items = this.resolve.items;
      this.selected = {
        item: this.items[0]
      };

      

        console.log('Modal init');

        this.company = { 
            id: 40426 
        };
    }

    ok() {
      this.close(
          {$value: this.selected.item}
        );
    }

    cancel() {
      this.dismiss({$value: 'cancel'});
    }
}

export const ModalComponent = {
    template: require('./modal.template.html'),
    bindings: {
        companyId: '<',
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: ModalController,
    controllerAs: 'ctrl'
};