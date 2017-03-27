export default class MainController {
    constructor() {
        this.company = { 
            id: 40426 
        };
        this.location = null;
        this.companyLocation = {};

        this.locationSelected = false;
    }

    onSelectedLocation(event) {
        this.location = event.location;
        this.companyLocation = {
            company: this.company.id,
            location: event.location.id
        };

        this.locationSelected = true;
        console.log('Company location: ', this.companyLocation);
    }

    goBack() {
        this.locationSelected = false;
        this.companyLocation.location = null;
    }
}