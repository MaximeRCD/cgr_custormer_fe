export interface Client {
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
        type_bien: string,
        max_price: string,
        min_price: string,
        max_surface: string,
        min_surface: string
    },
    nb_found: number,
    active: boolean
}




export const all_clients: Client[] = [
    {
        name: "Maxime RICHAUDEAU",
        telephone: "07 14 52 67 13",
        email: "maxime123@yahoo.fr",
        criteres: {
            localisation: ["montreuil"],
            code_postal: ["93100"],
            type_bien: ["maison"],
            max_price: "",
            min_price: "",
            max_surface: "",
            min_surface: ""
        },
        nb_found: 2,
        active: true,
    },
    {
        name: "Maxime RICHAUDEAU 2",
        telephone: "07 14 52 67 13",
        email: "maxime123@yahoo.fr",
        criteres: {
            localisation: ["montreuil", "vincennes", "fontenay-sous-bois"],
            code_postal: ["93100", "94300", "94120"],
            type_bien: ["maison"],
            max_price: "",
            min_price: "",
            max_surface: "",
            min_surface: ""
        },
        nb_found: 2,
        active: true,
    }, {
        name: "Maxime RICHAUDEAU 3",
        telephone: "07 14 52 67 13",
        email: "maxime123@yahoo.fr",
        criteres: {
            localisation: ["montreuil"],
            code_postal: ["93100"],
            type_bien: ["maison"],
            max_price: "",
            min_price: "",
            max_surface: "",
            min_surface: ""
        },
        nb_found: 2,
        active: true,
    },



]