import Hero from './hero.jpg';
import Logo from './Logo.svg';
import './styles.css'

// console.log("Hi World")

// Get the page container
const content = document.querySelector("#content")
const logoContainer = document.querySelector("#logo-container")
const menuBtn = document.querySelector("#menu-btn")
const homeBtn = document.querySelector("#home-btn")
const contactBtn = document.querySelector("#contact-btn")

function componentLogo() {
    const logo = new Image
    logo.src = Logo;
    logo.id = "logo"
    logoContainer.appendChild(logo)

    return logo
}

componentLogo()

function homePage() {

    function componentFirstViewport() {
        const firstViewportContainer = document.createElement("div");
        firstViewportContainer.appendChild(componentHeroContainer());
        return firstViewportContainer;
    }

    function componentHeroContainer() {
        const heroContainer = document.createElement("div")
        heroContainer.id = "hero-container"    
        const heroImage = new Image();
        heroImage.id = "hero-image"
        heroImage.src = Hero;
        heroContainer.appendChild(heroImage)
        content.appendChild(heroContainer)

        return heroContainer
    }

    function componentAbout() {
        const aboutContainer = document.createElement("div")
        aboutContainer.id = "about-container"
        const aboutHeading =  document.createElement("h1")
        aboutHeading.innerText = "Culinary Excellence"
        const aboutP = document.createElement("p")
        aboutP.innerText = "Our menu is a symphony of authenticity and creativity, crafted by master chefs who draw inspiration from centuries-old recipes passed down through generations. Each dish is a celebration of Thai culinary heritage, using only the freshest locally sourced ingredients and traditional cooking techniques."

        aboutContainer.appendChild(aboutHeading)
        aboutContainer.appendChild(aboutP)

        return aboutContainer
    }
    content.innerHTML = ""
    content.appendChild(componentFirstViewport())
    content.append(componentAbout())
}

homePage()

function menuPage() {

    function componentMenu() {
        const menu = document.createElement("menu")
        menu.id = "menu"

        const menuHeading = document.createElement("h1")
        menuHeading.innerText = "Menu"

        const menuItems = document.createElement("ul")
        
        const menuPadThai = document.createElement("li");
        menuPadThai.textContent = "Pad Thai";
        menuItems.appendChild(menuPadThai);

        const menuTomYumSoup = document.createElement("li");
        menuTomYumSoup.textContent = "Tom Yum Soup";
        menuItems.appendChild(menuTomYumSoup);

        const menuGreenCurry = document.createElement("li");
        menuGreenCurry.textContent = "Green Curry";
        menuItems.appendChild(menuGreenCurry);

        const menuMangoStickyRice = document.createElement("li");
        menuMangoStickyRice.textContent = "Mango Sticky Rice";
        menuItems.appendChild(menuMangoStickyRice);

        const menuPapayaSalad = document.createElement("li");
        menuPapayaSalad.textContent = "Papaya Salad";
        menuItems.appendChild(menuPapayaSalad);

        const menuMassamanCurry = document.createElement("li");
        menuMassamanCurry.textContent = "Massaman Curry";
        menuItems.appendChild(menuMassamanCurry);

        const menuThaiFriedRice = document.createElement("li");
        menuThaiFriedRice.textContent = "Thai Fried Rice";
        menuItems.appendChild(menuThaiFriedRice);

        const menuSpringRolls = document.createElement("li");
        menuSpringRolls.textContent = "Spring Rolls";
        menuItems.appendChild(menuSpringRolls);

        menu.appendChild(menuHeading)
        menu.appendChild(menuItems)

        return menu
    }
    content.innerHTML = ""
    content.appendChild(componentMenu())
}

function contactPage() {

    function componentOpeningHours() {
        const openingHoursContainer = document.createElement("div")

        const openingHours = document.createElement("ul")
        openingHours.id = "opening-hours"
        
        const monday = document.createElement("li");
        monday.textContent = "MONDAY 6-10";
        monday.id = "monday-opening-hours";
        openingHours.appendChild(monday);

        const tuesday = document.createElement("li");
        tuesday.textContent = "TUESDAY 6-10";
        tuesday.id = "tuesday-opening-hours";
        openingHours.appendChild(tuesday);

        const wednesday = document.createElement("li");
        wednesday.textContent = "WEDNESDAY 12-2.30 6-10";
        wednesday.id = "wednesday-opening-hours";
        openingHours.appendChild(wednesday);

        const thursday = document.createElement("li");
        thursday.textContent = "THURSDAY 12-2.30 5.45-10.30";
        thursday.id = "thursday-opening-hours";
        openingHours.appendChild(thursday);

        const friday = document.createElement("li");
        friday.textContent = "FRIDAY 12-2.30 5.45-10.30";
        friday.id = "friday-opening-hours";
        openingHours.appendChild(friday);

        const saturday = document.createElement("li");
        saturday.textContent = "SATURDAY 12-2.30 5.45-10.30";
        saturday.id = "saturday-opening-hours";
        openingHours.appendChild(saturday);

        const sunday = document.createElement("li");
        sunday.textContent = "SUNDAY 12-3 5-9";
        sunday.id = "sunday-opening-hours";
        openingHours.appendChild(sunday);

        openingHoursContainer.appendChild(openingHours)
        return openingHoursContainer
    }

    function componentAddress() {
        const addressContainer = document.createElement("div")
        addressContainer.id = "address-container"

        const addressList = document.createElement("ul")

        const street = document.createElement("li");
        street.textContent = "88 Nightingale Avenue";
        addressList.appendChild(street);

        const location = document.createElement("li");
        location.textContent = "Lightbridge";
        addressList.appendChild(location);

        const city = document.createElement("li");
        city.textContent = "London";
        addressList.appendChild(city);

        const postcode = document.createElement("li");
        postcode.textContent = "SW1A 0AA";
        addressList.appendChild(postcode);
        
        addressContainer.appendChild(addressList)
        return addressContainer
    }

    function componentContactUs () {
        const contactUsContainer = document.createElement("div")
        contactUsContainer.id = "contact-us-container" 

        const contactUs = document.createElement("ul")

        const number = document.createElement("li");
        number.textContent = "020 7994 7790";
        contactUs.appendChild(number);

        const email = document.createElement("li");
        email.textContent = "klwmi@realemail.com";
        contactUs.appendChild(email);

        const booking = document.createElement("li");
        booking.textContent = "SEARCH FOR A BOOKING ONLINE";
        contactUs.appendChild(booking);

        contactUsContainer.appendChild(contactUs)
        return contactUsContainer
    }

    function componentContact() {
        const contactContainer = document.createElement("div")
        contactContainer.id = "contact-id"
        contactContainer.append(componentOpeningHours())
        contactContainer.append(componentAddress())
        contactContainer.append(componentContactUs())

        return contactContainer
    }
    content.innerHTML = ""
    content.appendChild(componentContact())
}

menuBtn.addEventListener("click", menuPage)
homeBtn.addEventListener("click", homePage)
contactBtn.addEventListener("click", contactPage)

