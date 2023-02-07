const elem = document.getElementById('container');
const hiddenDiv = document.getElementById('hidden-div');

elem.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
});

elem.addEventListener('mouseout', function handleMouseOut(){
    hiddenDiv.style.display = 'none';
})