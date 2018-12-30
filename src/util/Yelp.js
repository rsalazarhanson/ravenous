const apiKey = "BFsXls6yC_5K97nVf9Sc_z2Ekj63TLD_hRQqv6pEzF2AA-TEChgHHdE6EjNCoE74wWtpnR-xo8R_vYxBWX4BmxtSFhd63xO1loelPbgp28-7PXJN8N8uoI5asqsoXHYx";

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then( (response) => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map( business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })

      }
    });
  }
}
export default Yelp;
