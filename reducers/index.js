import { CREATE_TITLE } from '../actions'

function title(state = '', action) {
  switch (action.type) {
    case CREATE_TITLE:
      return {
        state: action.title
      }

    default:
      return state
  }
}

export default title
