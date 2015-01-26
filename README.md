# facebook-permissions
Node module to retrieve a list of Facebook granted permissions.

## Usage

```javascript
var facebookPermissions = require('facebook-permissions');
var permissionsData  = facebookPermissions(userId, accessToken, function(data) { console.log(JSON.stringify(data)); });
```