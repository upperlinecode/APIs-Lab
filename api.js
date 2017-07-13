function getData(search_term){
    
    const endpoint=""//insert your endpoint into this string
    
    fetch(endpoint)
    .then(
        
        function(data){
            return data.json
        })
    .then(
        function(json){
           
            console.log(json)  
            
            //write your code to take pieces of data from your API and add them to your html page. 
        })
    .catch(
        err => {console.log(err)})  
}