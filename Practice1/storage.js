const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.art = []
HomeInventoryDatabase.electronics = []

const antiqueSecretary = {
    name: "Beidemieher Secretary",
    location: "Mom's Basement",
    description: "Belonged to Grandmother. Antique. Value unknown."
  }

const antiqueChairs = {
    name: "Green Antique Chairs",
    location: "My apartment",
    description: "Belonged to Grandmother. Value unknown"
}

const largeCouch = {
    name: "Brown Sectional Sofa",
    location: "My apartment",
    description: "very large contemporary sofa"
}

const smallTable = {
    name: "Dining Room Table",
    location: "My apartment",
    description: "old brown table"
}

const oldPainting1 = {
    name: "Venetian Oil Painting",
    location: "storage",
    description: "old oil painting. Unknow value"
}

const oldArtwork = {
    name: "Old Artwork",
    location: "My apartment",
    description: "portfolio paintings I did in artschool"
}

const newArtwork = {
    name: "New Artwork",
    location: "My apartment",
    description: "current artwork"
}

const desktopComputer = {
    name: "Desktop Computer System",
    location: "My apartment",
    description: "self built PC system"
}

const laptopComputer = {
    name: "Laptop",
    location: "My apartment",
    description: "mac laptop"
}

const sonosSystem = {
    name: "Sonos",
    location: "My apartment",
    description: "sonos audio system"
}


HomeInventoryDatabase.furniture.push(antiqueSecretary)
HomeInventoryDatabase.furniture.push(antiqueChairs)
HomeInventoryDatabase.furniture.push(largeCouch)
HomeInventoryDatabase.furniture.push(smallTable)


HomeInventoryDatabase.art.push(oldPainting1)
HomeInventoryDatabase.art.push(oldArtwork)
HomeInventoryDatabase.art.push(newArtwork)

HomeInventoryDatabase.electronics.push(desktopComputer)
HomeInventoryDatabase.electronics.push(laptopComputer)
HomeInventoryDatabase.electronics.push(sonosSystem)




const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(HomeInventoryDatabase, "whatever");

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

let test = loadDatabase("whatever")
console.log(test)