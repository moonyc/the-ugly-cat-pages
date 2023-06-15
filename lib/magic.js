import { Magic } from 'magic-sdk'



const createMagic = () => {
    return (
        typeof window !== "undefined" && new Magic('pk_live_AAA81B6304596C6A')
    )
}

export const magic = createMagic()