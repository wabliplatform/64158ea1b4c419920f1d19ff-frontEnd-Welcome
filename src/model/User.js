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

import ApiClient from '../ApiClient';
import UserUserImage from './UserUserImage';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @param userName {String} 
     * @param userImage {module:model/UserUserImage} 
     */
    constructor(userName, userImage) { 
        
        User.initialize(this, userName, userImage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userName, userImage) { 
        obj['userName'] = userName;
        obj['userImage'] = userImage;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('userImage')) {
                obj['userImage'] = UserUserImage.constructFromObject(data['userImage']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
User.prototype['_id'] = undefined;

/**
 * @member {String} userName
 */
User.prototype['userName'] = undefined;

/**
 * @member {module:model/UserUserImage} userImage
 */
User.prototype['userImage'] = undefined;






export default User;

