require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client_preset__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client_preset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client_preset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_batch_http__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_batch_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_batch_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);





const client = new __WEBPACK_IMPORTED_MODULE_0_apollo_client_preset___default.a({
  // link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
  link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_batch_http__["BatchHttpLink"]({ uri: 'http://localhost:4000/graphql' }),
  cache: new __WEBPACK_IMPORTED_MODULE_0_apollo_client_preset__["InMemoryCache"]()
});

// client.query({
//   query: gql`
//     query TodoApp {
//       photos {
//         id
//         credit {
//           id
//         }
//       }
//     }
//   `,
// })
//   .then(data => console.log(JSON.stringify(data, null, 2)))
//   .catch(error => console.error(error));
const x = client.query({
  query: __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default.a`
    query TodoApp {
      photos {
        id
      }
    }
  `
});

const z = client.query({
  query: __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default.a`
    query TodoApp2 {
      photos2 {
        id
      }
    }
  `
});

const y = Promise.all([x, x, z]);

y.then(data => {
  console.log(JSON.stringify(data, null, 2));
});

// import express from 'express'
// import bodyParser from 'body-parser'
// import { graphqlExpress, graphiqlExpress, ExpressGraphQLOptionsFunction } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools'

// import resolvers from './schema/resolvers'
// import typeDefs from './schema/typeDefs'

// // Some fake data

// // The GraphQL schema in string form
// // const typeDefs = `
// //   type Book { title: String, author: String, a: String }
// //   type RootQuery { books(b: Int!): [Book] }

// //   schema {
// //     query: RootQuery
// //   }
// // `;

// // The resolvers
// // const resolvers = {
// //   RootQuery: {
// //     books(obj, args, context) {
// //       console.log('====================================');
// //       console.log('obj', obj);
// //       console.log('args', args);
// //       console.log('context', context);
// //       console.log('====================================');
// //       return books
// //     }
// //   },
// // };

// console.log('====================================');
// console.log(typeDefs);
// console.log('====================================');

// // Put together a schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
//   logger: { log: (e) => console.log(e ) }
// });

// // Initialize the app
// const app = express();

// app.use((req, res, next) => {
//   req.user = { _id: 100  }
//   next()
// })

// // The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema, context: req })));

// // GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// // Start the server
// app.listen(3000, () => {
//   console.log('Go to http://localhost:3000/graphiql to run queries!');
// });

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("apollo-client-preset");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-batch-http");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map