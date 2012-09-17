var StringCalculator = (function(){
    
    var StringCalculator = function(){};

    StringCalculator.prototype =  {
        
        add: function(numbers) {
            if(numbers === "") return 0;
            
            return _.reduce(numbers.split(","), 
                function(memo, num){return memo + parseInt(num)}, 
                0);          
        }   
    };

    return StringCalculator;
})();