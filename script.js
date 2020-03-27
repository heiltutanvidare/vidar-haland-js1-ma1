// Question 1
const cat = {
    complain: function complaining() {
        console.log("Meow!");
    }
};

// Question 2
const heading = document.querySelector("h3");

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold"
    },
    {
        name: "Blurt",
        age: 21
    }
];

function logCatNames(catArray) {
    for (i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

logCatNames(cats);

// Question 8
function wrapCatNames(catArray) {
    let catName = "";
    for (i = 0; i < catArray.length; i++) {
        catName += `<h5>${catArray[i].name}</h5>`;
    }

    return catName;
}

const catNameHTML = wrapCatNames(cats);

// Question 9
resultsContainer.innerHTML = catNameHTML;

// Question 10
function createCatsHTML(catArray) {
    let catHTML = "";
    let catAge = "";
    let catName = "";

    for (i = 0; i < catArray.length; i++) {
        catAge = "Age unknown";

        if (catArray[i].age) {
            catAge = catArray[i].age;
        }
        catName += catArray[i].name;

        catHTML += `<div>
                        <h5>${catName}</h5>
                        <p>${catAge}</p>
                    </div>`;
    }

    return catHTML;
}

const catsHTML = createCatsHTML(cats);

resultsContainer.innerHTML = catsHTML;
