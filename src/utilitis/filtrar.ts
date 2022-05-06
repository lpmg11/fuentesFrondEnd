export function contiene(palabra: string, filtro: string) {
    return palabra.toLowerCase().includes(filtro.toLowerCase());
}

export function filtrarElementos(array: any[], nombre: string): object[] {
    return array.filter((element) => contiene(element.name, nombre));
}

export function filtrarTags(array: any[], tag: string) {
    return array.filter((element) =>
                          element.tags.map((t:any) => contiene(t, tag)).includes(true)
    );
}
