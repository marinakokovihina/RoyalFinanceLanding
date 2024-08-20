type Country = {
    abbreviation: string;
    name: string;
}

export const regions: Record<string, Country[]> = {
    asia: [
        {abbreviation: 'AED', name: 'Объединённые Арабские Эмираты'},
        {abbreviation: 'AZN', name: 'Азербайджан'},
        {abbreviation: 'BHD', name: 'Бахрейн'},
        {abbreviation: 'EGP', name: 'Египет'},
        {abbreviation: 'HKD', name: 'Гонконг'},
        {abbreviation: 'IDR', name: 'Индонезия'},
        {abbreviation: 'INR', name: 'Индия'},
        {abbreviation: 'JPY', name: 'Япония'},
        {abbreviation: 'KGS', name: 'Киргизия'},
        {abbreviation: 'KZT', name: 'Казахстан'},
        {abbreviation: 'RUB', name: 'Россия'},
        {abbreviation: 'SAR', name: 'Саудовская Аравия'},
        {abbreviation: 'SGD', name: 'Сингапур'},
        {abbreviation: 'THB', name: 'Таиланд'},
        {abbreviation: 'TRY', name: 'Турция'},
        {abbreviation: 'UZS', name: 'Узбекистан'}
    ],
    europe: [
        {abbreviation: 'EUR', name: 'Евросоюз'},
        {abbreviation: 'CHF', name: 'Швейцария'},
        {abbreviation: 'GBP', name: 'Великобритания'},
        {abbreviation: 'ISK', name: 'Исландия'},
        {abbreviation: 'MKD', name: 'Северная Македония'},
        {abbreviation: 'NOK', name: 'Норвегия'},
    ],
    america: [
        {abbreviation: 'BRL', name: 'Бразилия'},
        {abbreviation: 'CAD', name: 'Канада'},
        {abbreviation: 'CLP', name: 'Чили'},
        {abbreviation: 'DOP', name: 'Доминиканская Республика'},
    ],
    oceania: [
        {abbreviation: 'AUD', name: 'Австралия'},
        {abbreviation: 'NZD', name: 'Новая Зеландия'},

    ]
};
