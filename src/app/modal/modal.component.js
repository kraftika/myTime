class ModalController {

    $onInit() {
      this.items = this.resolve.items;
      this.selected = {
        item: this.items[0]
      };
    }

    ok() {
      this.close({$value: $ctrl.selected.item});
    }

    cancel() {
      this.dismiss({$value: 'cancel'});
    }
}

var template = 
    '<div class="modal-header">'+
        '<h3 class="modal-title" id="modal-title">I\'m a modal!</h3>'+
        '</div>'+
        '<div class="modal-body" id="modal-body">'+
            '<ul>'+
                '<li ng-repeat="item in $ctrl.items">'+
                    '<a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>'+
                '</li>'+
            '</ul>'+
            'Selected: <b>{{ $ctrl.selected.item }}</b>'+
        '</div>'+
        '<div class="modal-footer">'+
            '<button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>'+
            '<button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>'+
        '</div>';

export const ModalComponent = {
  template: template,
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
};