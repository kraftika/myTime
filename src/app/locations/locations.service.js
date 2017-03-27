export default class LocationsService {
    /*ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getLocationsByCompany(id) {
        let urlLocations = 'http://www.mytime.com/api/v2/companies/' + id +'/locations.json';

        let httpRequest = {
            url: urlLocations,
            method: 'GET',
            url: urlLocations,
            header: {
                'Content-type': 'application/json'
            }
        }

        return this.$http(httpRequest)
    }
}
