import desk from '../Images/desk.PNG';

function addImage(){
    const img = document.createElement('img');
    img.alt = 'desk',
    img.src = 'desk'

    const body = document.querySelector('body');
    body.appendChild(img);
}
export default addImage;
