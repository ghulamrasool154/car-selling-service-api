# server url  
    https://car-selling-service-api-kappa.vercel.app/
Vechile METHOD POST 
URL = https://car-selling-service-api-kappa.vercel.app/api/v1/vechile
body {
    "user" : "507f1f77bcf86cd799439011",
    "model" : "778c",
    "price" : 788,
    "phone" : "12345678901",
    "city" : "14444",
    "maxPictures" : 3,
    "pictures" : [
        "https://www.hubspot.com/hs-fs/hubfs/crm-free-hero-asset-spring-24@2x.webp?width=1120&height=918&name=crm-free-hero-asset-spring-24@2x.webp",
        "https://www.hubspot.com/hs-fs/hubfs/crm-free-hero-asset-spring-24@2x.webp?width=1120&height=918&name=crm-free-hero-asset-spring-24@2x.webp"
        ]
}

User METHOD POST 
# auth login
URL = https://car-selling-service-api-kappa.vercel.app/api/v1/auth

body {  
    "email" : "Amjad@desolint.com",
    "password" : "123456abc"
   
}
