import day from 'dayjs/esm';

export default function(value, format) {
    return day(String(value || '')).format(format);
}
