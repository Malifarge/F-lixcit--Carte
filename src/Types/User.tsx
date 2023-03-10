export interface UserType{
    id: string, 
    created_at: string, 
    Prénom: string,
    Nom: string
}

export interface UserACTType{
    id: number,
    created_at: string,
    identifiantId: string,
    email: string,
    password: string 
}