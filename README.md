
# JWT-authentication
 This project describes the steps involed in a authentication process between client & server using JWT tokens.

### First you need to generate some tokens 
 1. It's very easy just enter **node** and then the code in below image.
![generateTokens](https://user-images.githubusercontent.com/76589507/113830479-4865e480-97a4-11eb-8c28-64451f35146e.PNG)

 2. Then add these tokens in your .env file as ACCESS_TOKEN_PATH & REFRESH_TOKEN_PATH.
 ![dotenv](https://user-images.githubusercontent.com/76589507/113831448-40f30b00-97a5-11eb-800a-45dc8f1aa073.PNG)

 - ### Now Create the authUser.js file as shown below.
![AuthUserjs](https://user-images.githubusercontent.com/76589507/113831623-70a21300-97a5-11eb-80e5-cd50fbd93f68.PNG)

 - ### Now Create the inedx.js file as shown below.
  ![Indexjs](https://user-images.githubusercontent.com/76589507/113831847-ab0bb000-97a5-11eb-9f75-113b9504c43d.PNG)

### Onto the Requests part create a Requests.rest file as shown below.
You can use the extension `Rest Client` in VsCode or you can also use `Postman`, both are great but in this project I am using the entension.
![RequsetsRest](https://user-images.githubusercontent.com/76589507/113832525-5288e280-97a6-11eb-9109-14458854f6db.PNG)
