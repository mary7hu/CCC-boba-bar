// Define menu item objects
const puffleItemsData = [
    {
        imgSrc: "/CCC-boba-bar/menu-page/assets/menu/Classy.svg",
        title: "Classy Puffle",
        price: "$9",
        description: "Plain puffle, vanilla custard, drizzle"
    },
    {
        imgSrc: "/CCC-boba-bar/menu-page/assets/menu/Cereal Milk.svg",
        title: "Cereal Milk",
        price: "$10.25",
        description: "Plain puffle, vanilla custard, fruity pebbles, frosted flakes, cookie crisps, condensed milk"
    },
    {
        imgSrc: "/CCC-boba-bar/menu-page/assets/menu/Paradise.svg",
        title: "Paradise",
        price: "$10.25",
        description: "Plain puffle, swirl of vanilla & dole whip, strawberries, bananas, mangoes, honey drizzle"
    },
    {
        imgSrc: "/CCC-boba-bar/menu-page/assets/menu/Perfect matcha.svg",
        title: "Perfect Matcha",
        price: "$11",
        description: "Green tea puffle, green tea & vanilla custard, red bean, mochi, pocky sticks, condensed milk drizzle"
    },
    {
        imgSrc: "/CCC-boba-bar/menu-page/assets/menu/Strawberry Cheesecake.svg",
        title: "Strawberry Cheesecake",
        price: "$10.25",
        description: "Plain puffle, vanilla custard, graham crackers, cheesecake bites, strawberries & pocky sticks"
    },
    {
        imgSrc: "/CCC-boba-bar/menu-page/assets/menu/Smores drizzle.svg",
        title: "Do you want S’more?",
        price: "$11",
        description: "Chocolate chip puffle, chocolate & vanilla custard, graham crackers, marshmallows, chocolate drizzle"
    }
];

// Function to dynamically create item cards
function createMenuItemCard(item) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item_card");

    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.title;

    const title = document.createElement("div");
    title.classList.add("item_title");
    title.textContent = `${item.title} ${item.price}`;

    const description = document.createElement("p");
    description.classList.add("item_desc");
    description.textContent = item.description;

    itemCard.appendChild(img);
    itemCard.appendChild(title);
    itemCard.appendChild(description);

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
