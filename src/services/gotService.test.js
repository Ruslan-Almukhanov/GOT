const gotService = require("./gotService")
// @ponicode
describe("_transformCharacter", () => {
    let inst

    beforeEach(() => {
        inst = new gotService.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._transformCharacter({ url: "https://twitter.com/path?abc", name: "dummy_name/", gender: "Female", born: "Spectacled Caiman", died: false, culture: "#FF00FF" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._transformCharacter({ url: "http://www.example.com/route/123?foo=bar", name: "DUMMYNAME", gender: "Male", born: "Spectacled Caiman", died: true, culture: "green" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._transformCharacter({ url: "www.google.com", name: "dummy_name/", gender: "Female", born: "Australian Freshwater Crocodile", died: false, culture: "#F00" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._transformCharacter({ url: "http://base.com", name: "dummyName", gender: "Other", born: "Nile Crocodile", died: false, culture: "rgb(0,100,200)" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._transformCharacter({ url: "Www.GooGle.com", name: "dummy_name/", gender: "Male", born: "Saltwater Crocodile", died: true, culture: "rgb(0,100,200)" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._transformCharacter(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_transformBook", () => {
    let inst

    beforeEach(() => {
        inst = new gotService.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._transformBook({ name: "dummyName123", numberOfPages: -100, publiser: "Harbors", released: "commit d3f6bf9bcee016096098e88aced2d5afdc68c424\r\nAuthor: Edna Rice <Shanie.Pagac@yahoo.com>\r\nDate: Wed Jul 28 2021 22:05:49 GMT+0200 (Central European Summer Time)\r\n\r\n    bypass cross-platform hard drive\r\n" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._transformBook({ name: "DUMMYNAME", numberOfPages: 1, publiser: "Harbors", released: "commit f20ba84baadcbd1f3a45d95e9bb5aef588f4e902\r\nAuthor: Marty Douglas <Rubie_Boehm29@yahoo.com>\r\nDate: Thu Jul 29 2021 09:06:18 GMT+0200 (Central European Summer Time)\r\n\r\n    override solid state microchip\r\n" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._transformBook({ name: "DUMMYNAME", numberOfPages: 100, publiser: "Expressway", released: "commit f20ba84baadcbd1f3a45d95e9bb5aef588f4e902\r\nAuthor: Marty Douglas <Rubie_Boehm29@yahoo.com>\r\nDate: Thu Jul 29 2021 09:06:18 GMT+0200 (Central European Summer Time)\r\n\r\n    override solid state microchip\r\n" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._transformBook({ name: "dummy_name", numberOfPages: -100, publiser: "Harbors", released: "commit 03ccef2ffa982df061ae86ca8730cd9ad0af05b3\r\nAuthor: Ladarius Zboncak <Ricky.Schultz37@hotmail.com>\r\nDate: Wed Jul 28 2021 16:52:11 GMT+0200 (Central European Summer Time)\r\n\r\n    program wireless program\r\n" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._transformBook({ name: "DUMMYNAME", numberOfPages: -100, publiser: "Port", released: "commit e6d1117d97e7cc250166120d2eee1c2662c58150\r\nAuthor: Keagan Cole <Crystal69@gmail.com>\r\nDate: Thu Jul 29 2021 05:36:16 GMT+0200 (Central European Summer Time)\r\n\r\n    override wireless alarm\r\n" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._transformBook({ name: "", numberOfPages: NaN, publiser: "", released: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
