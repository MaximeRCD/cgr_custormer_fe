export interface Client {
    _id: string
    name: string,
    telephone: string,
    email: string,
    criteres: {
        localisation: string[],
        code_postal: string[],
        type_bien: string[],
        max_price: string,
        min_price: string,
        max_surface: string,
        min_surface: string
    },
    nb_found: number,
    active: boolean
}

export interface ClientIn {
    name: string,
    telephone: string,
    email: string,
    criteres: {
        localisation: string[],
        code_postal: string[],
        type_bien: string[],
        max_price: string,
        min_price: string,
        max_surface: string,
        min_surface: string
    },
    nb_found: number,
    active: boolean
}

export interface FormClient {
    name: string,
    telephone: string,
    email: string,
    criteres: {
        localisation: string,
        code_postal: string,
        type_bien: string[],
        max_price: string,
        min_price: string,
        max_surface: string,
        min_surface: string
    },
    nb_found: number,
    active: boolean
}




export const all_clients: Client[] = []