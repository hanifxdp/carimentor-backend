const axios = require("axios");
const qs = require("qs");

const DATA_URL = "https://fuseki-service.herokuapp.com";

const headers = {
  Accept: "application/sparql-results+json,*/*;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

exports.getMentors = async (param) => {
  // Query
  const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?id ?name ?img ?desc ?link ?categoryName
    WHERE{
        ?sub rdf:type data:mentor
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:name ?name.}
        OPTIONAL {?sub data:img ?img.}
        OPTIONAL {?sub data:link ?link.}
        OPTIONAL {?sub data:desc ?desc.}
        OPTIONAL {?sub data:onCategory ?categoryID.}
        OPTIONAL {?categoryID data:categoryName ?categoryName.}
        FILTER regex(?name, "${param.name ? param.name : ""}", "i")
        FILTER regex(?categoryName, "${
          param.category ? param.category : ""
        }", "i")
    }`,
  };
  try {
    const { data } = await axios(`${DATA_URL}/carimentor/query`, {
      method: "POST",
      headers,
      data: qs.stringify(queryData),
    });
    return data.results;
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getCategory = async (param) => {
  // Query
  const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 

    SELECT DISTINCT ?categoryID ?categoryName
    WHERE{
        ?sub rdf:type data:mentor
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:onCategory ?categoryID.}
        OPTIONAL {?categoryID data:categoryName ?categoryName.}
        FILTER regex(?category, "${param.category ? param.category : ""}", "i")
    }`,
  };
  try {
    const { data } = await axios(`${DATA_URL}/carimentor/query`, {
      method: "POST",
      headers,
      data: qs.stringify(queryData),
    });
    return data.results;
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = exports;
