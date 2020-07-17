window.onload = function(){
    
var Sources = [
'https://drive.google.com/uc?export=view&id=1ygJV690iCgo1yTLNqoqsJF1FVprnlF9D',
'https://drive.google.com/uc?export=view&id=1y_3S_6rMdnSZvDgwjqaj5yfcvv02OQc8',
'https://drive.google.com/uc?export=view&id=1yaBEfg9_-haufDw-Qu2zY5yT177qcuF5',
'https://drive.google.com/uc?export=view&id=1y_siqwsDHZqkX8DkLcYOq4wNB64ySftR',
'https://drive.google.com/uc?export=view&id=1y2AUWPyUrxrRd7Uo-gHXHwcvixUBgni9',
'https://drive.google.com/uc?export=view&id=1yfzePhrG_KWCIyzGmVesalpAFltbp7wZ',
'https://drive.google.com/uc?export=view&id=1yRVHW3S7YpWKwva4tWuu1DHRo9Xc1CpB',
'https://drive.google.com/uc?export=view&id=1yADDAW9rCUT6_ZKv3GOyxWvQfCa2aMsY',
'https://drive.google.com/uc?export=view&id=1y_Equ1puzfBBXS92ochgPNM2jaR5wfK6',
'https://drive.google.com/uc?export=view&id=1d1CJ_6gNgnccEhR-Z96EnsZnhiUjWLQr',
'https://drive.google.com/uc?export=view&id=1yJgJQiID8FnTkRtnt7RLDRKTkuMhfkT9',
'https://drive.google.com/uc?export=view&id=1yPyKkUd9VZpFd4UOzsgY5bAqbpDfuJQq'
]

var items = document.querySelectorAll('.items');
var screen = document.querySelector('#screen');

setTimeout(function(){
    for (let i=0;i<items.length;i++){
        items[i].style.animation = 'appear 2s linear forwards';
    }
    setTimeout(function(){
        for (let i=0;i<items.length;i++){
            items[i].style.opacity = '1';
            items[i].style.animation = 'none';
            items[i].onclick = function(e){
                screen.style.left = this.clientX;
                screen.style.top = this.clientY;
                screen.style.background = 'url('+Sources[i]+')';
                screen.style.backgroundSize = 'cover';
                screen.style.backgroundPosition = 'center';
                screen.style.animation = 'center 1s linear forwards';
            }
        }
    },2050)
},500)
    
screen.addEventListener('click', function(){
    screen.style.animation = 'none';
})

}
