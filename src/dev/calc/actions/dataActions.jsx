export function changeStartDate(date) {
    return {
        type: 'CHANGE_DATA_START_DATE',
        startDate: date
    }
}
export function changeEndDate(date) {
    return {
        type: 'CHANGE_DATA_END_DATE',
        endDate: date
    }
}
export function changeCountry(country) {
    return {
        type: 'CHANGE_DATA_COUNTRY',
        country: country

    }
}
export function changeDateOfBirth(date) {
    return {
        type: 'CHANGE_DATA_DATE_OF_BIRTH',
        dateOfBirth: date
    }
}