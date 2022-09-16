const DETAILS = document.querySelector('.details')
const CLOSE_CTA = document.querySelector('.details__close')
const PROJECTS_LINKS = document.querySelectorAll('.projects__project')
const PROJECTS_LIST = document.querySelectorAll('.details__project')
let detailsIsActive = false

export const checkProject = () =>
{

    PROJECTS_LINKS.forEach((link, index) =>
    {
        link.addEventListener('click', () =>
        {
            openDetails(index)
        })
    })

    CLOSE_CTA.addEventListener('click', () =>
    {
        closeDetails()
    })
}

const openDetails = (index) =>
{
    document.body.classList.add('noScroll')
    DETAILS.classList.add('isVisible')
    PROJECTS_LIST[index].classList.add('isActive')
}

const closeDetails = () =>
{
    document.body.classList.remove('noScroll')
    DETAILS.classList.remove('isVisible')
    document.querySelector('.details__project.isActive').classList.remove('isActive')
}