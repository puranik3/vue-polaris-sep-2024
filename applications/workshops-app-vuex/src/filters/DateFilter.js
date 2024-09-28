import format from 'date-fns/format';

// the input (strIsoDate) can be any data type
// output (returned value) should be a string

export default (strIsoDate, fmt = 'standard') => {
    let strFormat = 'MMM dd, yyyy';

    if (fmt === 'standard') {
        strFormat = 'MMM dd, yyyy'
    } else if (fmt === 'indian') {
        strFormat = 'dd/MM/yyyy';
    }

    return format(new Date(strIsoDate), strFormat);
};