import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./configuraciones";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};


export const getJSON = async function (url) {

    try {

        const respuesta = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await respuesta.json();

        if (!respuesta.ok) throw new Error(`${data.message} (${respuesta.status})`);

        return data;

    } catch (err) {
        throw err;
    }

}

export const enviarJSON = async function (url, enviarReceta) {

    try {

        const solicitud = fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(enviarReceta),
        });

        const respuesta = await Promise.race([solicitud, timeout(TIMEOUT_SEC)]);
        const data = await respuesta.json();

        if (!respuesta.ok) throw new Error(`${data.message} (${respuesta.status})`);

        return data;

    } catch (err) {
        throw err;
    }

}