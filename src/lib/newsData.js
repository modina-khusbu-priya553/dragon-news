// News for leftSidebar
 export const newsCategoriesData = async() =>{

    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
  }

// news for all news based on id
export const newsAllData = async(categoryId) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
  const data = await res.json();
  return data.data;
}

// news details based on id
export const newsDetailsData = async(news_id) =>{
  const res = await fetch(` https://openapi.programming-hero.com/api/news/${news_id}`)
  const data = await res.json();
  return data.data[0];
}