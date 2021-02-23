import image from './assets/image.png'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks'
export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'black',
            color: 'white',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock( 'привет, это мой первый конструктор сайтов </br> <a href="https://www.instagram.com/dreamforcema/">мой инстаграм<a>', {
        styles: {
            background: '#79ECAC',
            color: '#BF0F0B',
            'text-align': 'center',
            'font-size': '30px',
            height: '150px'
        }
    }),
    new ColumnsBlock(  [
        'JS - это просто',
        'научится может каждый ',
        'нужно только попробовать',
        

    ],  {
        styles: {
            background: '#79ECAC',
            color: '#1848D7',
            'text-align': 'center',
            'font-size': '30px',
            height: '150px'
        }
    }),
    new ImageBlock( image, {styles: {
        display: 'flex',
        margin: '10px',
        width: '1600px',
        height: '500px',
        'margin-left': 'auto',
        'margin-right': 'auto',

        
    }})
]

