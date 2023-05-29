# TempApi.WelcomeentityApi

All URIs are relative to *https://83.212.100.226:4001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createwelcomeentity**](WelcomeentityApi.md#createwelcomeentity) | **POST** /welcomeentity | Creates the data
[**deletewelcomeentity**](WelcomeentityApi.md#deletewelcomeentity) | **DELETE** /welcomeentity/{welcomeentityId} | Delete the element
[**getAllwelcomeentity**](WelcomeentityApi.md#getAllwelcomeentity) | **GET** /welcomeentity/getAll | Get all the data
[**getByParamswelcomeentity**](WelcomeentityApi.md#getByParamswelcomeentity) | **GET** /welcomeentity/getByParams | Get all the data based on user query
[**getwelcomeentity**](WelcomeentityApi.md#getwelcomeentity) | **GET** /welcomeentity/{welcomeentityId} | Get the element
[**updatewelcomeentity**](WelcomeentityApi.md#updatewelcomeentity) | **PUT** /welcomeentity/{welcomeentityId} | Updates the element



## createwelcomeentity

> Welcomeentity createwelcomeentity(welcomeentity)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeentityApi();
let welcomeentity = new TempApi.Welcomeentity(); // Welcomeentity | data to be created
apiInstance.createwelcomeentity(welcomeentity, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeentity** | [**Welcomeentity**](Welcomeentity.md)| data to be created | 

### Return type

[**Welcomeentity**](Welcomeentity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletewelcomeentity

> deletewelcomeentity(welcomeentityId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeentityApi();
let welcomeentityId = "welcomeentityId_example"; // String | the Id parameter
apiInstance.deletewelcomeentity(welcomeentityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeentityId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllwelcomeentity

> [Welcomeentity] getAllwelcomeentity()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeentityApi();
apiInstance.getAllwelcomeentity((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Welcomeentity]**](Welcomeentity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamswelcomeentity

> [Welcomeentity] getByParamswelcomeentity(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeentityApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamswelcomeentity(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Welcomeentity]**](Welcomeentity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getwelcomeentity

> Welcomeentity getwelcomeentity(welcomeentityId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeentityApi();
let welcomeentityId = "welcomeentityId_example"; // String | the Id parameter
apiInstance.getwelcomeentity(welcomeentityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeentityId** | **String**| the Id parameter | 

### Return type

[**Welcomeentity**](Welcomeentity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatewelcomeentity

> Welcomeentity updatewelcomeentity(welcomeentityId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeentityApi();
let welcomeentityId = "welcomeentityId_example"; // String | the Id parameter
let opts = {
  'welcomeentity': new TempApi.Welcomeentity() // Welcomeentity | data to be updated
};
apiInstance.updatewelcomeentity(welcomeentityId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeentityId** | **String**| the Id parameter | 
 **welcomeentity** | [**Welcomeentity**](Welcomeentity.md)| data to be updated | [optional] 

### Return type

[**Welcomeentity**](Welcomeentity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

