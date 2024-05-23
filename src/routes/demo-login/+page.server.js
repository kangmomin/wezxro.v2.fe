import {env} from "$lib/config.js";

export function load({}) {

    return {
        props: {
            ...env
        }
    }
}