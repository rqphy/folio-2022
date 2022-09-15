import * as THREE from 'three'
import Experience from './Experience'

export default class Cursor
{
    constructor()
    {
        this.experience = new Experience()

        this.cursor = document.querySelector('#cursor')
        this.hoverElements = document.querySelectorAll('[data-hover_element]')

        this.mousePosition = {}
        this.mousePosition.x = 0
        this.mousePosition.y = 0
        
        window.addEventListener('mousemove', this.getMousePosition)
        this.initCursorAnimation()
    }

    getMousePosition = (_event) =>
    {
        _event.preventDefault()

        this.mousePosition.x = _event.clientX
        this.mousePosition.y = _event.clientY
        
    }

    updateCursorPosition = () =>
    {
        this.cursor.style.transform = `translate3d(calc(${this.mousePosition.x}px - 50%),calc(${this.mousePosition.y}px - 50%), 0)`
    }

    initCursorAnimation = () =>
    {
        this.cursor.classList.add('active')
    
        // HOVER
        if(this.hoverElements.length < 1) return
        for(const element of this.hoverElements)
        {
            element.addEventListener('mouseover', () =>
            {
                this.cursor.classList.add('hovered')
            })
            element.addEventListener('mouseleave', () =>
            {
                this.cursor.classList.remove('hovered')
            })
        }
    }
    
    update()
    {
        this.updateCursorPosition()
    }
}