class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    

    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === "all"){ //strict equality used to see if it is equal
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card'); //true statement will show all the cards regardless of data attribute
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`) 
    } //false statement will just select the cards that match this.tabData attribute

    

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card)); //Array.from converts to a new array

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {this.selectTab()});
  } //event listener created for when user clicks on a tab, content shows up associated with tab name

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab'); //used querySelectorAll() which references all of the tabs on the page
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(tab => tab.style.display = 'none') //each tab is set to display none for the time being until user clicks on specific tab
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab'); //this will show the active tab clicked upon
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex'; //each tab content shows display flex
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab').forEach(tabLink => new TabLink(tabLink));