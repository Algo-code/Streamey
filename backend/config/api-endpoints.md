## API ENDPOINTS

This file contains a list of the exposed endpoints for the back end system.

##### common status codes
200 - request successful
201 - resouce created successfully
409 - Action conflict - resource already exists
422 - Validation error
500 - Server error

### User Account Actions
#### URL Endpoint (POST)
/register
Action - register a user account

### User Login/Signin
#### URL Endpoint (POST)
/auth/signin
Action - perform user login

### Get User Profile/Data
#### URL Endpoint (GET)
##### Token required in Header
/me
Action - retrive user data