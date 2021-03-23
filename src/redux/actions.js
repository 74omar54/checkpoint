//delete a listing 
//add a listing
export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: index
    }
}

export const deleteListing = (index) => {
    return {
        type:'DELETE_LISTING',
        value: index
    }
}