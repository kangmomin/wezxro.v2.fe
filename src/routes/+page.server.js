// +page.server.js

import { KR_NAME, EN_NAME } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export function load({ fetch, params }) {
    return {
        envs: {
            KR_NAME,
            EN_NAME
        }
    }
}