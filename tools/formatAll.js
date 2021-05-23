module.exports = fn = (data) => {
  return {
    "id": data.id ? data.id.value : "",
    "name": data.name ? data.name.value : "",
    "img": data.img ? data.img.value : "",
    "link": data.link ? data.link.value : "",
    "desc": data.desc ? data.desc.value : "",
    "category": data.category ? data.category.value : "",
  };
};
