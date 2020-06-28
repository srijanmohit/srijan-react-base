export const dashboardActions = {
  TODO: 'TODO'
}

const initialState = {
  count: 3,
  menuItem: ['Graph 1', 'Graph 2', 'Graph 3'],
  todoData: []
}

function dashboardReducer(state= initialState, action) {

  switch (action.type) {
    case 'MENU_UPDATE':
      const count = state.count + 1
      return {
        ...state,
        count,
        menuItem:[...state.menuItem, `Graph ${count}`]
      }
  
    default:
      return {
        ...state
      }
  }
}

export default dashboardReducer;
