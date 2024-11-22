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
import ApiClient from '../ApiClient';

/**
 * The Director model module.
 * @module model/Director
 * @version 1.0.0
 */
export default class Director {
  /**
   * Constructs a new <code>Director</code>.
   * @alias module:model/Director
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Director</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Director} obj Optional instance to populate.
   * @return {module:model/Director} The populated <code>Director</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Director();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('biography'))
        obj.biography = ApiClient.convertToType(data['biography'], 'String');
    }
    return obj;
  }
}

/**
 * Unique identifier for the director
 * @member {Number} id
 */
Director.prototype.id = undefined;

/**
 * Name of the director
 * @member {String} name
 */
Director.prototype.name = undefined;

/**
 * Biography of the director
 * @member {String} biography
 */
Director.prototype.biography = undefined;

