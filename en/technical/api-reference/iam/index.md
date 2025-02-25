# API Reference: Identity Access Manager

This page contains the API reference for the [Identity Access Manager (IAM)](/en/product/iam/index). IAM APIs will always look like this:

```
https://`%dataplant_url%/iam
```

* [Login endpoint](/en/technical/api-reference/iam/index?id=login-endpoint)
* [Logout endpoint](/en/technical/api-reference/iam/index?id=logout-endpoint)


---
## Login endpoint
### Using a login/password method
This authentication mode allows you to [connect with a login and password](/en/product/iam/auth-provider/index?id=dataplant) defined in your [Identity Access Manager](/en/product/iam/index).

///

Example request :

```
curl -X POST \
  https://mydataplant.forepaas.io/iam/login \
  -H 'Content-Type: application/json' \
  -d '{
	"login":"LOGIN",
	"password":"****",
	"app_id":"APPID",
	"auth_mode":"forepaas_id_resource_owner"
}'
```
:::
Example response :

```json
{
"uid": "John Doe", // The unique id of the logged-in user
"user": "M. John Doe", // The full name of the logged-in user
"firstname": "John", // The first name of the logged-in user
"lastname": "Doe", // The last name of the logged-in user
"civility": "M. ", // The civility of the logged-in user
"login": "john.doe", // The login of the logged-in user
"password_renew": false, // flag to know if the has to change his password "password_expiration": "2020-02-28T17:17:10.274Z ", // password expiration
date
"token": "f54e34a56b897"
}
```
///

||||
| :------------ | :-------------: | -------------: |
| login | String | The login of the user, as received in the registration email. |
| password | String | The password of the user, as received in the registration email. |
| app_id | String | The application identifier (set to 'forepaas' to login to the project's IAM in general) |
| auth_mode | String | The authentication mode to used. The value must be set to “forepaas_id_resource_owner” |


### API Key Credentials
This authentication mode allows you to [connect with an API and secret key](/en/product/iam/users/api-secret-key) defined in your [Identity Access Manager](/en/product/iam/index).

///

Example request:

```
curl -X POST \
  https://mydataplant.forepaas.io/iam/login \
  -H 'Content-Type: application/json' \
  -d '{
	"apikey":"APIKEY",
	"secretkey":"****",
	"app_id":"APPID",
	"auth_mode":"apikey"
}'
```
:::
Example response:

```json
{
"uid": "John Doe", // The unique id of the logged-in user
"user": "M. John Doe", // The full name of the logged-in user
"firstname": "John", // The first name of the logged-in user
"lastname": "Doe", // The last name of the logged-in user
"civility": "M. ", // The civility of the logged-in user
"login": "john.doe", // The login of the logged-in user
"password_renew": false, // flag to know if the has to change his password "password_expiration": "2020-02-28T17:17:10.274Z ", // password expiration
date
"token": "f54e34a56b897"
}
```
///

||||
| :------------ | :-------------: | -------------: |
| apikey | String [A-Za-z0- 9\-] | The api key provided by the new device registration. |
| secretkey | String [A-Za-z0- 9\-] | The secret key provided by the new device registration. |
| app_id | String | The application identifier (set to 'forepaas' to login to the project's IAM in general) |
| auth_mode | String | The authentication mode to used. The value must be set to “apikey” |
 

---
## Logout endpoint
In order to delete a token, you can call the logout endpoint.

///

Example request:

```
curl -X DELETE \
  https://mydataplant.forepaas.io/iam/logout?app_id=*****&token=***** \
  -H 'Content-Type: application/json'
```
:::
Example response:

```json
{
  "success": true,
  "status": 200,
  "duration": 0.02
}

```
///








