type Country = {
    abbreviation: string;
    name: string;
}

export const regions: Record<string, Country[]> = {
    sng: [
        {abbreviation: 'RUS', name: 'Россия'},
        {abbreviation: 'РК', name: 'Казахстан'},
        {abbreviation: 'UZB', name: 'Узбекистан'},
        {abbreviation: 'AZ', name: 'Азербайджан'}
    ],
    another: [
        {abbreviation: 'IDN', name: 'Индонезия'},
        {abbreviation: 'EGY', name: 'Египет'}

    ],
    evro: [
        {abbreviation: 'EC', name: 'Евросоюз'}

    ]
};
