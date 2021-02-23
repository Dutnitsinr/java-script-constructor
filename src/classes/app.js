
import {Site} from './classes/site'
import './styles/main.css'
import { Sidebar } from './classes/sidebar'


export class App {
    constructor(model){
        this.model = model
    }
    init(){
        const site =new Site('#site')

        site.render(this.model)

        const newBlock = (newBlock) => {
            this.model.push(newBlock)
            site.render(this.model)
            
        }


        new Sidebar('#panel', newBlock)
            }
}