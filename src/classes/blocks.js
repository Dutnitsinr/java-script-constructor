import { col, css, row } from "../utils"

 class Block{
    constructor( value, options) {
        this.value = value
        this.options = options
    }

    toHTMl() {
        throw new Error('method toHTML have to use')
    }
}

export class TitleBlock extends Block{
    constructor(value, options){
        super( value, options)
    }
    toHTMl(){
        const {tag, styles = 'h1'} = this.options
        return  row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block{
    constructor(value, options){
        super( value, options)
    }
    toHTMl(){
        const {styles} = this.options
        return  row(col(`<p>${this.value}</p>`), css(styles))
    }
}

export class ColumnsBlock extends Block{
    constructor(value, options){
        super( value, options)
    }
    toHTMl(){
        const {styles} = this.options
        let newColumn = this.value.map(col).join('')
        return  row(newColumn, css(styles))
    }
}

export class ImageBlock extends Block{
    constructor(value, options){
        super( value, options)
    }
    toHTMl(){
        return  row(`<img src=${this.value} class="" style="${css(this.options.styles)}"/>`)
    }
}
