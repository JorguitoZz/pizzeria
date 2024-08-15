import { API_URL, STRAPI_URL } from "../config"

export async function getPizzas() {
    const res = await fetch(`${API_URL}/pizzas?fields[0]=nombre&fields[1]=precio&fields[2]=ingredientes&populate[imagen_pizza][fields][0]=url`);
    if (!res.ok) {
        console.error('no funciono');
        return [];
    }
    const { data } = await res.json();


    // Mapeamos los datos para obtener una estructura más sencilla
    const pizzas = data.map(pizza => ({
        id: pizza.id,
        nombre: pizza.attributes.nombre,
        precio: pizza.attributes.precio,
        ingredientes: pizza.attributes.ingredientes,
        imagen_url: `${STRAPI_URL}${pizza.attributes.imagen_pizza.data[0].attributes.url}`
    }));


    return pizzas;
}

export async function getEntradas() {
    const res = await fetch(`${API_URL}/entradas?fields[0]=nombre&fields[1]=descripcion&fields[2]=precio&populate[imagen][fields][0]=url`);
    if (!res.ok) {
        console.error('no funciono');
        return [];
    }
    const { data } = await res.json();

    // Mapeamos los datos para obtener una estructura más sencilla
    const entradas = data.map(entrada => ({
        id: entrada.id,
        nombre: entrada.attributes.nombre,
        precio: entrada.attributes.precio,
        descripcion: entrada.attributes.descripcion,
        imagen: `${STRAPI_URL}${entrada.attributes.imagen.data[0].attributes.url}`
    }));


    return entradas;
}


export async function getBebidas() {
    const res = await fetch(`${API_URL}/bebidas?populate[imagen][fields][0]=url`);
    if (!res.ok) {
        console.error('no funciono');
        return [];
    }
    const { data } = await res.json();

    // Mapeamos los datos para obtener una estructura más sencilla
    const bebidas = data.map(bebida => ({
        id: bebida.id,
        nombre: bebida.attributes.nombre,
        precio: bebida.attributes.precio,
        imagen: `${STRAPI_URL}${bebida.attributes.imagen.data[0].attributes.url}`
    }));



    return bebidas;
}

