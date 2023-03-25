function loadScript(Src,callBacks){
    var script = document.createElement('script')
    script.src = Src;
    script.onload = function(){
        console.log("Loaded Script with Src: " , Src)
        callBacks(null,Src);
    } 
    script.onerror = function(){
        console.log("Error Script with Src: ", Src);
        callBacks(new Error("Src got some error"));
    }  
    document.body.appendChild(script)
}

function hello(error,Src){
    if(error){
        console.log(error);
        return;
    }
    alert('This is Santosh Kushwah')
}
loadScript("https://cdn.jsdelidfdvr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js", hello)