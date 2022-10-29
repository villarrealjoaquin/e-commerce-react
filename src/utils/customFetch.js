export const customFetch = (products, id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            try{
                if(products){
                    if(id){
                        const product = products.find((product)=> product.id === id);
                        resolve(product)
                    } else{
                        resolve(products)
                    }
                }
            } catch (err){
                reject(err)
            }
        }, 2000)
    })
}