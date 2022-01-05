import moment from "moment";

export const getFormatedData = (birthdate) => {
    return moment(birthdate, 'DD.MM.YYYY')
}