/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

var fs = require('fs');
 var path = require('path');

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
//ssl: {
//    key: fs.readFileSync(path.resolve(__dirname,'../ssl/key.pem')),
//    cert: fs.readFileSync(path.resolve(__dirname,'../ssl/cert.pem'))
//  },
//  port: 443,
//  policie: 'isHTTPS'

};
