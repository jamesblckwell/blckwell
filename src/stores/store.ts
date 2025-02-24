import { readable, writable } from "svelte/store";

export const address = readable("Glassworks Court, Grenan Square, Greenford UB6&nbsp;0FP")
export const phone = readable("+44 7731 964 772")
export const email = readable("james.blackwell64@gmail.com")
export const socials = readable({ "linkedin": "https://www.linkedin.com/in/jamesblckwell/", "github": "https://github.com/jamesblckwell" })
export const showNav = writable(true)
export const pageTitle = writable("Home")
