/**
 *по этому файлу вопросы:
 * 1) почему в try catch? вроде функции стораджа не асинхронные, проверяй ифами значение и все. try catch очень медленная шляпа
 * и ее лучше просто так не юзать
 * 2) а почему это лежит в папке стор?) по сути это утилиты, причем которые могут использоваться не только для стора, ток для этого нужно переписать код
 * Ключи прокидывай в фцункцию и записывай инфу по переданным ключам, Тогда получим чистые функции которые можно положить в
 * папку utils где нибудь в корне src и в ней еще добавить index.js для корректных импортов, Либо пиши служебный класс со статическими методами,
 * которые так же можно будет юзать где угодно (но в данном случае наверное глупо ради 2 методов городить класс)
 */
export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state');
        if(savedState === null) {
            return undefined
        }

        return JSON.parse(savedState)
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const stateToBeSaved = JSON.stringify(state)

        localStorage.setItem('state', stateToBeSaved)
    } catch (error) {
        console.error(error)
    }
}