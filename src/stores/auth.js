import { writable } from 'svelte/store'

export const auth_user = writable( { } )

export class AuthorizedUser {
    constructor(
        id = "",
        name = "",
        email = "",
        role = "",
        provider = "",
        created_at = Date.now( ),
        updated_at = Date.now( )
    ) {
        this.id = id,
        this.name = name
        this.email = email
        this.role = role
        this.provider = provider
        this.created_at = created_at
        this.updated_at = updated_at
    }
    setToken = ( token ) => {
        this.token = token
    }
}
