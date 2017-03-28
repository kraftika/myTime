class ModalController {

    $onInit() {
      this.items = this.resolve.items;

      console.log(this.items);
      this.selected = {
        item: this.items[0]
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
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function() {
        var $ctrl = this;

        console.log('controlle');

        $ctrl.$onInit = function () {
        $ctrl.items = $ctrl.resolve.items;
        $ctrl.selected = {
            item: $ctrl.items[0]
        };
        };

        $ctrl.ok = function () {
            $ctrl.close({$value: $ctrl.selected.item});
        };

        $ctrl.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };
    }
};