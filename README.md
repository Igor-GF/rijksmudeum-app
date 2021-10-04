# Client-Side-Programming Assessment 2 of 2

App created for PXL.Widgets assessment which makes use of Rijksmuseum API.

Link to the assignment: https://epic-bose-ea2f34.netlify.app/

# Description

I started the application by creating a React App, deleting all extra files I don't use, and creating the folders: Components and Pages.

I decided not using react-router once the application has only 2 pages, which are the components: Home and ObjectInfo.

In the App component I have set the function called getDataRequest to fetch the API, this function is called as soon as the app mounts (useEffect).

All the useStates were set in the App component, they are:
- artObjects: which holds the data from the API every time the app mounts;
- searchValue: holds the value typed in the searchbar. Every time something is typed the App component mounts again, once useEffect watches for the searchValue; 
- objectDetails: holds the data from art object clicked by the user, which comes from the ArtCard component by lifting the setObjectDetails;
- displaySearch: it is a bolean used to determine when the Header show the Home button or the SearchBar;

Once I chose not using the Router, in the App component I used an ES6 if statement to check when the Home component or ObjectInfo component is displayed. It does that by checking the "objectDetails.id" to make sure there is/isn't something in the object.

Header component: receives "displaySearch" which is also check by an if statement between SearchBar and Home button. The Home button "setObjectDetails" to empty, which means that the Home component shows back on the screen.

Collection component: maps the art objects to display them on screen by using the ArtCard component and passing down each object into a card.

ArtCard component: sends the "objectDetails" to the App component when it gets clicked, by lifting the "setObjectDetails".

Search component: is called inside the Header component. It receives the "setValue" from the App component and sends te value and also receives it back, which makes a loop that fills up the search value as something is typed in the searcbar. This value triggers the useEffect in the App component, which passes the value into the getDataRequest(), and it is inserted in the URL.

CSS/SASS: I prefer using SASS in my projects so that I can set variables and I can nested more the level of my HTML, which is more pleasent to work. For that I used a BEM method in my classNames in order to facilitating the nesting and the general composition, it facilitates to work with transitions as well, such as the rotation used in the Cards.

Visually, there is a lot of improvements that could make it more attractive, but it would take much longer.

# Technologies

- JavaScript
- ReactJS
- CSS / SASS

# Link below to the 1st assignment (Anagrams):

https://github.com/Igor-GF/anagrams-assignment