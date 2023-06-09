/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.WelcomeentityApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WelcomeentityApi', function() {
    describe('createwelcomeentity', function() {
      it('should call createwelcomeentity successfully', function(done) {
        //uncomment below and update the code to test createwelcomeentity
        //instance.createwelcomeentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletewelcomeentity', function() {
      it('should call deletewelcomeentity successfully', function(done) {
        //uncomment below and update the code to test deletewelcomeentity
        //instance.deletewelcomeentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllwelcomeentity', function() {
      it('should call getAllwelcomeentity successfully', function(done) {
        //uncomment below and update the code to test getAllwelcomeentity
        //instance.getAllwelcomeentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getByParamswelcomeentity', function() {
      it('should call getByParamswelcomeentity successfully', function(done) {
        //uncomment below and update the code to test getByParamswelcomeentity
        //instance.getByParamswelcomeentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getwelcomeentity', function() {
      it('should call getwelcomeentity successfully', function(done) {
        //uncomment below and update the code to test getwelcomeentity
        //instance.getwelcomeentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatewelcomeentity', function() {
      it('should call updatewelcomeentity successfully', function(done) {
        //uncomment below and update the code to test updatewelcomeentity
        //instance.updatewelcomeentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
