export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase} , received ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getCharacter = (id) => {
        return this.getResource(`/characters/${id}`)
    }

    getAllBooks = (url) => {
        return this.getResource('/books')
    }

    getBook = (id) => {
        return this.getResource(`/books/${id}`)
    }

    getAllHouses = (url) => {
        return this.getResource('/houses')
    }

    getHouse = (id) => {
        return this.getResource(`/houses/${id}`)
    }

    _transformCharacter(char) {
        return {
            url: char.url,
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}