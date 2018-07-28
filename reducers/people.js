const initialState = { people: [] }

export default function peopleReducer(state = initialState, action) {
  // alert('jkljk' + JSON.stringify(action))
  switch (action.type) {
    case 'ADD_PERSON':
      // alert('ADD_PERSON:' + JSON.stringify(state.people))
      return {
        people: [...state.people, action.person]
      }
    case 'DELETE_PERSON':
      return {
        people: state.people.filter(p => p.name !== action.person.name)
      }
    case 'LIST_OF_PERSONS':
      // alert('LIST_OF_PERSONS:' + JSON.stringify(people.list))

      return {
        people: action.list
      }

    default:
      return state
  }
}
