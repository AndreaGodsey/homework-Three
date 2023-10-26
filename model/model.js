export function changeRoute(){
    // declare varibables
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    console.log("The page is "+ pageID);

    // change content
    if(pageID != ""){
      $.get(`pages/${pageID}/${pageID}.html`, function(data){
           $("#app").html(data);
      });
    }else{
      $.get(`pages/home/home.html`, function(data){
           $("#app").html(data);
      });
    }
}