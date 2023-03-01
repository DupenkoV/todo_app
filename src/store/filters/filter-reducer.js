import { SET_FILTER } from "./filter-constans";
export const filters = (state = 'all', action) => {
    switch (action.type) {
        case SET_FILTER: {
            //по полю фильтр я уже отписался в креаторе вопрос в том что у тебя редьюсер возвращает то что получает, тогда нахрена тебе редьюсер?)
            // логика редьюсера в том что он меняет стор, а тут с этим ничего не происходит
            return action.filter
        }
        default: {
            return state;
        }
    }
}