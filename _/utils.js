

export function checkType(input) {
    if (Array.isArray(input)) {
        return 'array';
    } else if (typeof input === 'object' && input !== null) {
        // This check ensures that 'null' is not considered as an object
        return 'bbject';
    } else {
        return 'Neither Array nor Object';
    }
}
