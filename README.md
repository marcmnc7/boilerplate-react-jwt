This is a create-react-app app with an authentication layer based on http-only cookies with refresh token managment.
Using context api, hooks and high order component.
This is only the frontend part. It needs to call an API running (or proxied) in the same port [Example API](https://github.com/marcmnc7/boilerplate-express-jwt-mongoose) and provides the access and refresh tokens.

AVAILABLE PAGES:
  - Login page
  - Register page
  - Public page (accessible anyone)
  - Private page (only accessible if logged in)
  - Restricted page (only accessible if not logged in)
