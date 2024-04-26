// Define menu item objects
const puffleItemsData = [
    {
        imgSrc: "./assets/menu/Classy.svg",
        title: "Classy Puffle",
        price: "$9",
        description: "Plain puffle, vanilla custard, drizzle"
    },
    {
        imgSrc: "./assets/menu/Cereal Milk.svg",
        title: "Cereal Milk",
        price: "$10.25",
        description: "Plain puffle, vanilla custard, fruity pebbles, frosted flakes, cookie crisps, condensed milk"
    },
    {
        imgSrc: "./assets/menu/Paradise.svg",
        title: "Paradise",
        price: "$10.25",
        description: "Plain puffle, swirl of vanilla & dole whip, strawberries, bananas, mangoes, honey drizzle"
    },
    {
        imgSrc: "./assets/menu/Perfect matcha.svg",
        title: "Perfect Matcha",
        price: "$11",
        description: "Green tea puffle, green tea & vanilla custard, red bean, mochi, pocky sticks, condensed milk drizzle"
    },
    {
        imgSrc: "./assets/menu/Strawberry Cheesecake.svg",
        title: "Strawberry Cheesecake",
        price: "$10.25",
        description: "Plain puffle, vanilla custard, graham crackers, cheesecake bites, strawberries & pocky sticks"
    },
    {
        imgSrc: "./assets/menu/Smores drizzle.svg",
        title: "Do you want S’more?",
        price: "$11",
        description: "Chocolate chip puffle, chocolate & vanilla custard, graham crackers, marshmallows, chocolate drizzle"
    },
    {
        imgSrc: "./assets/menu/Brookie Puffle.svg",
        title: "Brookie Puffle",
        price: "$11.50",
        description: "Oreo chocolate chip puffle, cookies and cream & vanilla custard, brownie bites, cookie crisps, chocolate pocky & nutella drizzle"
    }
];

// Function to dynamically create item cards
// function createMenuItemCard(item) {
//     const itemCard = document.createElement("div");
//     itemCard.classList.add("item_card");

//     const img = document.createElement("img");
//     img.src = item.imgSrc;
//     img.alt = item.title;

//     const title = document.createElement("div");
//     title.classList.add("item_title");
//     title.textContent = `${item.title} ${item.price}`;

//     const description = document.createElement("p");
//     description.classList.add("item_desc");
//     description.textContent = item.description;

//     itemCard.appendChild(img);
//     itemCard.appendChild(title);
//     itemCard.appendChild(description);

//     return itemCard;
// }

// try this
// Function to dynamically create item cards
function createMenuItemCard(item) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item_card");

    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.title;

    const titleAndDescription = document.createElement("div");
    titleAndDescription.classList.add("title_and_description");

    const title = document.createElement("div");
    title.classList.add("item_title");
    title.textContent = `${item.title} ${item.price}`;

    const description = document.createElement("p");
    description.classList.add("item_desc");
    description.textContent = item.description;

    titleAndDescription.appendChild(title);
    titleAndDescription.appendChild(description);

    itemCard.appendChild(img);
    itemCard.appendChild(titleAndDescription);

    return itemCard;
}


// Function to load menu items dynamically
function loadPuffleItems() {
    const menuItemsContainer = document.getElementById("puffle_items");
    puffleItemsData.forEach(item => {
        const itemCard = createMenuItemCard(item);
        menuItemsContainer.appendChild(itemCard);
    });
}

// Call the function to load menu items when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadPuffleItems();
});



// Filter Buttons:
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter_btn');
    const menuSections = document.querySelectorAll('.menu_sections');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // if button is selected, deselect and show full menu
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                menuSections.forEach(section => {
                    section.style.display = 'flex';
                });
                return;
            }
            
            // Remove the 'selected' class from all filter buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('selected');
            });

            // Hide all menu sections
            menuSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the menu section corresponding to the clicked button
            document.getElementById(targetId).style.display = 'flex';
            // Add the "selected" class to the current button so that css is updated
            button.classList.add('selected');
        });
    });
});
