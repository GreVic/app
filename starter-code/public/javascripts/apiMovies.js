let theMovieDb = {};
theMovieDb.common = {
  api_key: "62706964a54757878e9737ac5a8ceafc",
  base_uri: "http://api.themoviedb.org/3/",
  images_uri: "http://image.tmdb.org/t/p/",
  timeout: 5000,
  language: "en-US",
  generateQuery: function (options) {
    'use strict';
    let myOptions, query, option;
    myOptions = options || {};
    query = "?api_key=" + theMovieDb.common.api_key + "&language=" + theMovieDb.common.language;
    if (Object.keys(myOptions).length > 0) {
      for (option in myOptions) {
        if (myOptions.hasOwnProperty(option) && option !== "id" && option !== "body") {
          query = query + "&" + option + "=" + myOptions[option];
        }
      }
    }
    return query;
  }
}

// const baseURL = "https://api.themoviedb.org/3/movie/550?api_key=62706964a54757878e9737ac5a8ceafc";

// function apitMaster() {
//   const baseURL = "https://api.themoviedb.org/3/movie/550?api_key=62706964a54757878e9737ac5a8ceafc";

//   function getData(baseURL) {
//     axios
//       .get(baseURL)
//       .then(dataPayload => {
//         console.log(dataPayload.data.bpi);
//         const myKeys = Object.keys(dataPayload.data.bpi);
//         const myValues = myKeys.map(date => {
//           return dataPayload.data.bpi[date];
//         });
//       })
//       .catch(err => console.log(err));
//   }
//   getData(baseURL);
// }

// apitMaster();

//_________________________________________________

// (function () {
//   window.tmdb = {
//     "api_key": "62706964a54757878e9737ac5a8ceafc",
//     "base_uri": "http://api.themoviedb.org/3",
//     "images_uri": "http://image.tmdb.org/t/p",
//     "timeout": 5000,
//     call: function (url, params, success, error) {
//       let params_str = "api_key=" + tmdb.api_key;
//       for (let key in params) {
//         if (params.hasOwnProperty(key)) {
//           params_str += "&" + key + "=" + encodeURIComponent(params[key]);
//         }
//       }
//       let xhr = new XMLHttpRequest();
//       xhr.timeout = tmdb.timeout;
//       xhr.ontimeout = function () {
//         throw ("Request timed out: " + url + " " + params_str);
//       };
//       xhr.open("GET", tmdb.base_uri + url + "?" + params_str, true);
//       xhr.setRequestHeader('Accept', 'application/json');
//       xhr.responseType = "text";
//       xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           if (this.status === 200) {
//             if (typeof success == "function") {
//               success(JSON.parse(this.response));
//             } else {
//               throw ('No success callback, but the request gave results')
//             }
//           } else {
//             if (typeof error == "function") {
//               error(JSON.parse(this.response));
//             } else {
//               throw ('No error callback')
//             }
//           }
//         }
//       };
//       xhr.send();
//     }
//   }
// })()


