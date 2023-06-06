function curriedAdd(total) {

    if(total){
        return function addNext(num){
            if(!num){
                return total
            }
            total += num
            return addNext
        }
    }
    else return 0

}

module.exports = { curriedAdd };
