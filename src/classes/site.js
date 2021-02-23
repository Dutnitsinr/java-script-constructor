export class Site{
    constructor(selector) {
        this.$el = document.querySelector(selector)
        
    }
    render(module){
        this.$el.innerHTML = ''
        module.forEach(block => {
            console.log(block.toHTMl());
            this.$el.insertAdjacentHTML('beforeend', block.toHTMl())
        
            
        
        })
    }
}

 