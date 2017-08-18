export default function (prevState = 'Загрузка стран не запрашивалась', action) {
    switch (action.type) {
        case 'DOWNLOAD_STARTED' : {
            return action.text
        }
        case 'COUNTRIES_LOADED' : {
            return action.text
        }
        case 'LOADING_ERROR' : {
            return action.text
        }
        default : {
            return prevState;
        }
    }
}