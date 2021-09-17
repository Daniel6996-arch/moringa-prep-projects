var runner = function(fn){
    console.log("This is another function below!");
    fn()
}
runner(function(){console.log("okay!")});