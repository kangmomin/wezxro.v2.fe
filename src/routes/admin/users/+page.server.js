import {env} from "$lib/config.js";

export function load({ fetch, params }) {

    return {
        props: {
            ...env
        },
    }
}