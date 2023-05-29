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


import ApiClient from "../ApiClient";
import Welcomeentity from '../model/Welcomeentity';

/**
* Welcomeentity service.
* @module api/WelcomeentityApi
* @version 1.0.0
*/
export default class WelcomeentityApi {

    /**
    * Constructs a new WelcomeentityApi. 
    * @alias module:api/WelcomeentityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createwelcomeentity operation.
     * @callback module:api/WelcomeentityApi~createwelcomeentityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Welcomeentity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Welcomeentity} welcomeentity data to be created
     * @param {module:api/WelcomeentityApi~createwelcomeentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Welcomeentity}
     */
    createwelcomeentity(welcomeentity, callback) {
      let postBody = welcomeentity;
      // verify the required parameter 'welcomeentity' is set
      if (welcomeentity === undefined || welcomeentity === null) {
        throw new Error("Missing the required parameter 'welcomeentity' when calling createwelcomeentity");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Welcomeentity;
      return this.apiClient.callApi(
        '/welcomeentity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletewelcomeentity operation.
     * @callback module:api/WelcomeentityApi~deletewelcomeentityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} welcomeentityId the Id parameter
     * @param {module:api/WelcomeentityApi~deletewelcomeentityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletewelcomeentity(welcomeentityId, callback) {
      let postBody = null;
      // verify the required parameter 'welcomeentityId' is set
      if (welcomeentityId === undefined || welcomeentityId === null) {
        throw new Error("Missing the required parameter 'welcomeentityId' when calling deletewelcomeentity");
      }

      let pathParams = {
        'welcomeentityId': welcomeentityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/welcomeentity/{welcomeentityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllwelcomeentity operation.
     * @callback module:api/WelcomeentityApi~getAllwelcomeentityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Welcomeentity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/WelcomeentityApi~getAllwelcomeentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Welcomeentity>}
     */
    getAllwelcomeentity(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Welcomeentity];
      return this.apiClient.callApi(
        '/welcomeentity/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamswelcomeentity operation.
     * @callback module:api/WelcomeentityApi~getByParamswelcomeentityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Welcomeentity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} filter the query based on which the search is performed
     * @param {module:api/WelcomeentityApi~getByParamswelcomeentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Welcomeentity>}
     */
    getByParamswelcomeentity(filter, callback) {
      let postBody = null;
      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling getByParamswelcomeentity");
      }

      let pathParams = {
      };
      let queryParams = {
        'filter': filter
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Welcomeentity];
      return this.apiClient.callApi(
        '/welcomeentity/getByParams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getwelcomeentity operation.
     * @callback module:api/WelcomeentityApi~getwelcomeentityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Welcomeentity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} welcomeentityId the Id parameter
     * @param {module:api/WelcomeentityApi~getwelcomeentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Welcomeentity}
     */
    getwelcomeentity(welcomeentityId, callback) {
      let postBody = null;
      // verify the required parameter 'welcomeentityId' is set
      if (welcomeentityId === undefined || welcomeentityId === null) {
        throw new Error("Missing the required parameter 'welcomeentityId' when calling getwelcomeentity");
      }

      let pathParams = {
        'welcomeentityId': welcomeentityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Welcomeentity;
      return this.apiClient.callApi(
        '/welcomeentity/{welcomeentityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatewelcomeentity operation.
     * @callback module:api/WelcomeentityApi~updatewelcomeentityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Welcomeentity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} welcomeentityId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Welcomeentity} opts.welcomeentity data to be updated
     * @param {module:api/WelcomeentityApi~updatewelcomeentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Welcomeentity}
     */
    updatewelcomeentity(welcomeentityId, opts, callback) {
      opts = opts || {};
      let postBody = opts['welcomeentity'];
      // verify the required parameter 'welcomeentityId' is set
      if (welcomeentityId === undefined || welcomeentityId === null) {
        throw new Error("Missing the required parameter 'welcomeentityId' when calling updatewelcomeentity");
      }

      let pathParams = {
        'welcomeentityId': welcomeentityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Welcomeentity;
      return this.apiClient.callApi(
        '/welcomeentity/{welcomeentityId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}