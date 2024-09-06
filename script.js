var firstName = ["Albania", "Angola", "Argentina", "Armenia", "Australia","Austria","Bangladesh", 
                "Belgium", "Belize", "Bolivia", "Bosnia","Botswana", "Brazil", "Bulgaria", "Cambodia", 
                "China", "Costa Rica","Croatia","Georgia","Hungary","India", "Japan","Jordan", "Kyrgystan",
                "Laos","Malaysia", "Nepal" ,"Pakistan","Panama","Peru","Qatar","Romania","Sri Lanka","Thailand",
                "Tunisia","Turkiye", "Uzbekistan","Vietnam" ]
var lastName = [ "Antarctica", "East Asia", "Eastern Europe","Europe", "Northern Africa","North America", "Oceania", "Southern Africa", "South America",
                "South Asia", "South East Asia", "West Asia"] 
function getName() {
    var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' or ' + lastName[Math.floor(Math.random() * lastName.length)];
    return randomName;
}
function nameQty() {
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = ''
    if (userQty > 10) {
        document.querySelector('.nameList').innerHTML = 'ONLY TEN NAMES CAN BE GENERATED'
    } 
    else{
        for (var i = 0; i < userQty; i++) {
            document.querySelector('.nameList').innerHTML += getName() + '<br>';
        }  
    }
}