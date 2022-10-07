/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [

    /*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
    {
        id: 1,
        text: "The Handmaid's Tale",
        author: "Margaret Atwood",
        date: "Feb 17 1986",
        topics: ["Contemporary Womens", "book"]
    },
    //Not sure how an array of strings is added to the key topic. Asked and think I have it correctly now. 
    {
        id: 2,
        text: "And Then There Were None",
        author: "Agatha Christie",
        date: "Sept 10 2013",
        topics: ["Mystery", "book"]
    },
    {
        id: 3,
        text: "Neverwhere",
        author: "Neil Gaiman",
        date: "Oct 23 2007",
        topics: ["Fantasy", "book"]
    },
    {
        id: 4,
        text: "The Glass Castle",
        author: "Jeannette Walls",
        date: "Dec 15 2006",
        topics: ["Biography", "book", "Literary Biography"]
    }
]

//Adding magazine topics to my notes array using the push() method.

const betterHomes =

{
    id: 5,
    text: "Better Homes and Gardens",
    author: "multiple",
    date: "monthly",
    topics: ["organization", "cleaning", "gardening"]
}

const vogue =
{
    id: 6,
    text: "Vogue",
    author: "multiple",
    date: "monthly",
    topics: ["cosmetics", "fashion"]
}

const people =
{
    id: 7,
    text: "People",
    author: "multiple",
    date: "monthly",
    topics: ["fitness", "self help"]
}



notes.push(betterHomes, vogue, people)

//console.log(notes)

//console.log("*** All Note Topics ***")
//In first for loop interate through notes objects

for (const note of notes) {
    //second for loop iterate through topics arrays
    for (const list of note.topics) {
        //console.log(list)
    }
}

//console.log("*** Average Topics Per Note ***")
//starting with 0 to count through all the topics

let totalTopics = 0

//first for of loop is interating through notes objects in order to find topics
for (const note of notes) {

    //second for of loop is iterating through each note topics array
    for (const list of note.topics) {

        //telling loop to go through one by one
        totalTopics += 1
    }
}
//looking for the average
averageTopics = totalTopics / notes.length

//console.log(averageTopics)


//Create a new, empty variable
const filteredNotes = []

// What criteria am I sorting by?
const criteria = "organization"

//Where to iterate through first
for (const index of notes) {

    //Iterating through topics arrays
    for (const filter of index.topics) {
        if (filter === criteria) {
            filteredNotes.push(index)
        }
    }

}

//console.log(filteredNotes)

console.log("***  Note Articles  ***")

//interate each notes array



/*console.log each iteration with the text of each note surrounded by an HTML article tag. 
Will be building a string template and interpolate JS variables inside it.*/

// update code to include each topic, contained in a child <section> element for each note.

let allHtml = ""

for (const note of notes) {
    allHtml += `<article>${note.text}</article>\n`
    for (const object of notes) {
        allHtml += `<section>${object.topics}</section>\n`
        
    }

}
console.log(allHtml)

// use a nested for of loop. Update output to be milti-line string using string templates.