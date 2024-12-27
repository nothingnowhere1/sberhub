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
    map_data: Record<string, string>,
    last_visit_date: string,
    createdAt: string,
    updatedAt: string,
    _v: number
}

export interface userUpdateDto {
    name: string,
    email: string,
    password?: string,
    type_id?: string,
    project?: string,
    description?: string
    map_data?: string,
    last_visit_date?: string,
    createdAt?: string,
    updatedAt?: string,
    _v?: number
}