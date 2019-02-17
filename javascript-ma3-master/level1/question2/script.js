//Console.log out elements in JSON file


var objekt = {
   "video":[
      {
         "id":12312412312,
         "name":"Ecuaciones Diferenciales",
         "url":"/video/math/edo/12312412312",
         "author":{
            "data":[
               {
                  "name_author":"Alejandro Morales",
                  "url":"/author/alejandro-morales",
                  "type":"master"
               }
            ]
         }
      }
   ]
};

var videObjekt = objekt.video[0];
var id = videObjekt.id;
var name = videObjekt.name;
var url = videObjekt.url;
var authorObjekt = videObjekt.author;
var dataArray = authorObjekt.data;
var dataInfoObject = dataArray[0];
var data_name_author = dataInfoObject.name_author;
var data_url = dataInfoObject.url;
var data_type = dataInfoObject.type;

console.log("The video id is " + id, ",the name is " + name, "and the url is "  + url)
console.log("The name of the author is " + data_name_author,"and his url is " + data_url, "he is also using the data type" + data_type);
