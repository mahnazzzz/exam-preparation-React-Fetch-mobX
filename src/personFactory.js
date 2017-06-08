import {observable, computed, action, useStrict} from "mobx";

useStrict(true) //??
class PersonFactory {

    @observable
    persons = [];


    constructor() {

        this.persons = [];

       setInterval(this.fetchPersons.bind(this),3000);//??

    }

    @action
    fetchPersons() {
        fetch(" http://localhost:4567/api/persons_changing")
            .then(res => res.json())
            .then(action(result => {
                this.persons.replace(result) }))
    }

    @computed
    get getPersons() {
        return this.persons;
    }
}

export default new PersonFactory();