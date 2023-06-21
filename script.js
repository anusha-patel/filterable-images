// select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll('.filter_button button')
const filterableCards = document.querySelectorAll('.filterable_cards .card')


// define the filterCards function before use
const filterCards = e =>{
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    // console.log(e.target);


   // iterate over each filterable card
    filterableCards.forEach(card =>{
    // console.log(card);
    // add hide class to hide the card intially
    card.classList.add('hide');
    // check if the card matches   the selected filter or 'all' is selected
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove('hide');
    }
});

};

// add click event listener to each filter button

filterButtons.forEach((button)=>{
    button.addEventListener('click', filterCards);
}) 
    
