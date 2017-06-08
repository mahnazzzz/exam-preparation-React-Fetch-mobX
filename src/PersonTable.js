import React, { Component } from "react";
import {observer} from "mobx-react";
import factory from "./personFactory";

@observer
class PersonTable extends Component {
  // constructor(){
  //   super();
  // }

  render() {
      const rows = factory.getPersons.map((person)=>{
          return(
              <tr key={person._id}> //??
                  <td>{person.age}</td>
                  <td>{person.name}</td>
                  <td>{person.gender}</td>
                  <td>{person.email}</td>
                  <td>{person.friends.map(function(friend){ // man kan også skriv (friend) => i sted for
                      return(

                          <p key={friend.id}>{friend.id} {friend.name}</p>
                      )
                  })}</td>

              </tr>)
      });
    return (
      <table className="table">
        <thead>
          <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
        </thead>
        
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
}
export default PersonTable;