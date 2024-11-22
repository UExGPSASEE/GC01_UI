/*
 * Movie Streaming API
 * API for managing content (movies, series, and episodes) on a streaming platform.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import Director from '../model/Director';

/**
* Directors service.
* @module api/DirectorsApi
* @version 1.0.0
*/
export default class DirectorsApi {

    /**
    * Constructs a new DirectorsApi. 
    * @alias module:api/DirectorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addDirector operation.
     * @callback moduleapi/DirectorsApi~addDirectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Director{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new director
     * Add a new director to the platform
     * @param {module:model/Director} body 
     * @param {module:api/DirectorsApi~addDirectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addDirector(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addDirector");
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
      let returnType = Director;

      return this.apiClient.callApi(
        '/directors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteDirector operation.
     * @callback moduleapi/DirectorsApi~deleteDirectorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete director
     * Delete director by its ID
     * @param {Number} directorId The ID of the director to delete
     * @param {module:api/DirectorsApi~deleteDirectorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDirector(directorId, callback) {
      
      let postBody = null;
      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling deleteDirector");
      }

      let pathParams = {
        'directorId': directorId
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
        '/directors/{directorId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDirectorById operation.
     * @callback moduleapi/DirectorsApi~getDirectorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Director{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get director details
     * Get detailed information about a specific director
     * @param {Number} directorId The ID of the director to retrieve
     * @param {module:api/DirectorsApi~getDirectorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDirectorById(directorId, callback) {
      
      let postBody = null;
      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirectorById");
      }

      let pathParams = {
        'directorId': directorId
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
      let returnType = Director;

      return this.apiClient.callApi(
        '/directors/{directorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDirectors operation.
     * @callback moduleapi/DirectorsApi~getDirectorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Director>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all directors
     * Retrieve a list of all directors available in the platform
     * @param {module:api/DirectorsApi~getDirectorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDirectors(callback) {
      
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
      let returnType = [Director];

      return this.apiClient.callApi(
        '/directors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateDirector operation.
     * @callback moduleapi/DirectorsApi~updateDirectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Director{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update director
     * Update information about a specific director
     * @param {module:model/Director} body 
     * @param {Number} directorId The ID of the director to update
     * @param {module:api/DirectorsApi~updateDirectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateDirector(body, directorId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDirector");
      }
      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling updateDirector");
      }

      let pathParams = {
        'directorId': directorId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = Director;

      return this.apiClient.callApi(
        '/directors/{directorId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}