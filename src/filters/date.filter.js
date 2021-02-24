// export default function dateFilter(value, format = 'date') {
//     const options = {};
//     if (format.includes('date')) {
//         options.day = '2-digit';
//         options.month = 'long';
//         options.year = 'numeric';
//     }
//     if (format.includes('time')) {
//         options.hour = '2-digit';
//         options.minute = '2-digit';
//         options.second = '2-digit';
//     }
//
//     return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value));
// }
// eslint-disable-next-line import/no-named-default
import {default as format} from 'date-fns/format';

export default date => {
    return format(new Date(date), 'MMMM dd, yyyy');
};
