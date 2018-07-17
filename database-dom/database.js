const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

let data = loadDatabase("whatever")
console.log(data)


for (i = 0; i < data.furniture.length; i++) {
    console.log(data.furniture[i]);
}
