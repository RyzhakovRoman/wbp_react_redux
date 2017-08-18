export function setStateDownloadStartedCountry() {
    return {
        type: 'DOWNLOAD_STARTED',
        text: 'Загружается список стран...'
    }
}

export function setStateCountriesLoaded() {
    return {
        type: 'COUNTRIES_LOADED',
        text: 'Данные загруженны'
    }
}

export function setStateLoadingError() {
    return {
        type: 'LOADING_ERROR',
        text: 'Ошибка загрузки данных'
    }
}
