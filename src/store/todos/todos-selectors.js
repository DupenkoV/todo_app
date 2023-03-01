export const allTodo = (state) => state.todoList;
//почему ты в селекторах мутируешь данные? это уже не селекторы получаются)) селектор - это ты тупо стучишься в стор и что то выдаешь
// если тебе нужна доп логика - это нужно писать или в редьюсере и соответственно менять стор или в самом компоненте, но не
// в селекторе (ты значение в сторе не меняешь, но к тебе приходит не то что есть в сторе, а это нарушение патерна)
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