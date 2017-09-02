/**
 * WsPruebaController
 *
 * @description :: Server-side logic for managing wspruebas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var java = require("java");
java.classpath.push(sails.config.appPath + "/lib_java/log4j-1.2.9.jar");
java.classpath.push(sails.config.appPath + "/lib_java/commons.collections-3.2.1.jar");
java.classpath.push(sails.config.appPath + "/lib_java/commons-beanutils-1.7.0.jar");
java.classpath.push(sails.config.appPath + "/lib_java/commons-lang-2.4.jar");
java.classpath.push(sails.config.appPath + "/lib_java/commons-logging-1.1.1.jar");
java.classpath.push(sails.config.appPath + "/lib_java/ezmorph-1.0.6.jar");
java.classpath.push(sails.config.appPath + "/lib_java/jersey-client-1.2.jar");
java.classpath.push(sails.config.appPath + "/lib_java/jersey-core-1.2.jar");
java.classpath.push(sails.config.appPath + "/lib_java/json-lib-2.3-jdk13.jar");
java.classpath.push(sails.config.appPath + "/lib_java/jsr311-api-1.1.1.jar");
java.classpath.push(sails.config.appPath + "/lib_java/OrgSistemasSecurity.jar");

module.exports = {
  pruebaJava: function(req, res) {
    var OrgSistemasWebServiceClient = java.import("co.edu.udea.wsClient.OrgSistemasWebServiceClient");
    sails.log.debug(OrgSistemasWebServiceClient);
    var clientWS = new OrgSistemasWebServiceClient(true);
    sails.log.debug(clientWS);
    clientWS.addParamSync("cedula", "1026145787");
    var user = clientWS.obtenerStringSync("consultaPersonaMares", "6aaa5e631067cdda423396987f54f9df96625150");
    sails.log.debug(user);
    console.log(user+"-----------------------------");
    return res.view(user);
  }

};
