export function addPerson(person) {
  // alert('dsjbjdsbf' + JSON.stringify(person))
  return {
    type: 'ADD_PERSON',
    person
  }
}
export function listOfPersons(list) {
  // alert('dsjbjdsbf' + JSON.stringify(list))
  return {
    type: 'LIST_OF_PERSONS',
    list
  }
}

export function deletePerson(person) {
  return {
    type: 'DELETE_PERSON',
    person
  }
}
