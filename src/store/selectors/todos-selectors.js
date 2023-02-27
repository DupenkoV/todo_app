export const allTodo = (state) => state.todoList;

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todoList
        }
        case 'active': {
            return state.todoList.filter(item => !item.completed)
        }
        case 'completed': {
            return state.todoList.filter(item => item.completed)
        }
        default: {
            return state.todoList
        }
    }
}