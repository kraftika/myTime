export default class ServicesService {
    /*ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getServices(companyId, locationId) {
        let urlServices= 'http://www.mytime.com/api/v2/companies/' + companyId +'/locations/'+ locationId + '.json';

        let httpRequest = {
            url: urlServices,
            method: 'GET',
            header: {
                'Content-type': 'application/json'
            }
        }

        return this.$http(httpRequest)
    }
}
