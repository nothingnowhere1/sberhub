const monthsTitle = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export const zero = (value: string | number) => (
    '00' + String(value)
).slice(-2);

export const formatDate = (value: any | null | undefined, fallback: string = '—') => {
    if (!value) return fallback;

    const date = new Date(value);
    if (!date || date.toString() === 'NaN') return fallback;

    return `${zero(date.getDate())}.${zero(date.getMonth() + 1)}.${date.getFullYear()}`;
};

export const formatDateTime = (value: any | null | undefined, fallback: string = '—', formattedMonth: boolean = false) => {
    if (!value) return fallback;

    const date = new Date(value);
    if (!date || date.toString() === 'NaN') return fallback;
    const parsedMonth = formattedMonth && monthsTitle[date.getMonth()];

    if (parsedMonth) return `${date.getDate()} ${parsedMonth} ${date.getFullYear()} ${zero(date.getHours())}:${zero(date.getMinutes())}`;

    return `${zero(date.getDate())}.${zero(date.getMonth() + 1)}.${date.getFullYear()} ${zero(date.getHours())}:${zero(date.getMinutes())}`;
};