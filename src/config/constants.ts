/**
 * API Languages options.
 * Define with reference https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 * (Take ISO_639-1)
 */
export enum LANGUAGES {
    CHINESE = 'zh',
    ENGLISH = 'en',
    FRENCH = 'fr',
    GERMAN = 'de',
    GREEK = 'el',
    ITALIAN = 'it',
    JAPANESE = 'ja',
    POLISH = 'pl',
    PORTUGUESE = 'pt',
    RUSSIAN = 'ru',
    SPANISH = 'es',
}

export enum AUDIOVISUAL_TYPE {
    MOVIE = 'movie',
    TV = 'tv'
}

export enum CHANGES_TYPES {
    MOVIE = 'movie',
    TV = 'tv',
    PERSON = 'person'
}

export const IMAGE_PATH = (image: string, size = 200) => {
    if (image === null || image === "" || image === undefined){
        return "";
    }
    return `https://image.tmdb.org/t/p/w${size}${image}`
}