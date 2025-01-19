export interface LoginDTO {
    email: string,
    password: string,
}

export interface RegisterDTO {
    name: string,
    email: string,
    password: string,
}

export interface userLoginDto {
    createdAt: string,
    email: string,
    last_visit_date: string,
    name: string,
    project: string,
    token: string
    type_id: number,
    updatedAt: string,
    _v: number,
    _id: string,
}

export interface userDto {
    _id: string,
    name: string,
    email: string,
    password: string,
    type_id: string,
    project: string,
    description: string
    map_data: MapData,
    last_visit_date: string,
    createdAt: string,
    updatedAt: string,
    _v: number
}

export enum Genders {
    NO = '0',
    MALE = '1',
    FEMALE = '2',
}

export const GendersText: Record<Genders, string> = {
    '0': 'Не указан',
    '1': 'Мужской',
    '2': 'Женский',
}

export enum SearchType {
    NO = '0',
    SINGLE = '1',
    MARRIED = '2',
    IN_RELATIONSHIP = '3',
    ENGAGED = '4',
    COMPLICATED = '5',
    SEARCHING = '6',
}

export const SearchTypeText: Record<SearchType, string> = {
    '0': 'Не указано',
    '1': 'Холост',
    '2': 'Женат',
    '3': 'В отношениях',
    '4': 'Помолвлен',
    '5': 'Всё сложно',
    '6': 'В поиске',
}

interface MapData {
    birthday?: Date,
    city?: string,
    gender?: Genders,
    instagram?: string,
    searchType?: SearchType,
    avatar?: string,
    about?: string,
}

export interface userUpdateDto {
    name: string,
    email: string,
    map_data?: MapData,
}