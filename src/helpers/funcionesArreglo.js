export const arrayToStringList = (array, separator = ',') => {
    if (array) {
        return array.map(e => e.trim()).join(separator + ' ');
    }
    return '';
}

export const stringToArray = (string, joiner = ',') => {
    if (string) {
        return string.split(joiner).map(e => e.trim());
    }
    return [];
}