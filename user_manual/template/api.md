///

API Reference
=============
The Stripe API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support [cross-origin resource sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing), allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API key in any public website's client-side code). [JSON](http://www.json.org/) is returned by all API responses, including errors, although our [API libraries](https://stripe.com/docs/libraries) convert responses to appropriate language-specific objects.
To make the API as explorable as possible, accounts have test mode and live mode [API keys](https://stripe.com/docs/keys). There is no "switch" for changing between modes, just use the appropriate key to perform a live or test transaction. Requests made with test mode credentials never hit the banking networks and incur no cost.
Be sure to subscribe to Stripe's [API announce mailing list](https://groups.google.com/a/lists.stripe.com/group/api-announce/) to receive information on new additions and changes to Stripe's API and language libraries.
:::
# API libraries
Official libraries for the Stripe API are [available in several languages](/docs/libraries). Community-supported libraries are also available for [additional languages](/docs/libraries#third-party).
    https://api.stripe.com
///

///

Authentication
==============

Authenticate your account by including your secret key in API requests. You can manage your API keys in the [Dashboard](https://dashboard.stripe.com/account/apikeys). Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
Authentication to the API is performed via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). Provide your API key as the basic auth username value. You do not need to provide a password.
If you need to authenticate via bearer auth (e.g., for a cross-origin request), use `-H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc"` instead of `-u sk_test_4eC39HqLyjWDarjtT1zdp7dc`.
All API requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure). Calls made over plain HTTP will fail. API requests without authentication will also fail.
:::
    curl https://api.stripe.com/v1/charges \
      -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:
curl uses the `-u` flag to pass basic auth credentials. (Adding a colon after your API key prevents curl from asking for a password.)
A sample test API key is included in all the examples here, so you can test any example right away. To test requests using your account, replace the sample API key with your actual API key.
///
///

Errors
======

Stripe uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the `5xx` range indicate an error with Stripe's servers (these are rare).
Some `4xx` errors that could be handled programmatically (e.g., a card is [declined](/docs/declines)) include an [error code](/docs/error-codes) that briefly explains the error reported.
:::
### HTTP status code summary
|                                    |                                                                                                  |
|------------------------------------|--------------------------------------------------------------------------------------------------|
| 200 - OK                           | Everything worked as expected.                                                                   |
| 400 - Bad Request                  | The request was unacceptable, often due to missing a required parameter.                         |
| 401 - Unauthorized                 | No valid API key provided.                                                                       |
| 402 - Request Failed               | The parameters were valid but the request failed.                                                |
| 404 - Not Found                    | The requested resource doesn't exist.                                                            |
| 409 - Conflict                     | The request conflicts with another request (perhaps due to using the same idempotent key).       |
| 429 - Too Many Requests            | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 - Server Errors | Something went wrong on Stripe's end. (These are rare.)           
///

> Congrats! You've reached the bottom of the page...

[https://www.youtube.com/watch?v=9Hq9rf0XgrI]