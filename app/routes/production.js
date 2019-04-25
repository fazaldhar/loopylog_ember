import Route from '@ember/routing/route';
import Production from 'loopylog/models/production';
const Promise = Ember.RSVP.Promise;

export default Route.extend({
    model(params) {
        // return {
        //     "ProductName": "Ponderosa",
        //     "DimensionName": "1\" X 4\" X 14'",
        //     "BoardsSum": 20,
        //     "BoardFeetSum": 1000
        // }
        return new Promise(function(resolve) {
            setTimeout(() => {
                let  data = Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
                data.then((data) => {
                    let records = [];
                    data.forEach(item => {
                        records.push(Production.create(item));
                    });
                    resolve(records);
                });
            }, 400);
        })
    }
});
