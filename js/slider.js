(function(){
    const sliders = [...document.querySelectorAll('.testimonios_body')];
    const buttonNext = document.querySelector('#next');
    const buttonPrev = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonPrev.addEventListener('click', ()=>{
        changePosition(-1);
    });


    const changePosition=(add)=>{
    
        const currentTestimonio = document.querySelector('.testimonios_body--show').dataset.id;

        value= Number(currentTestimonio);

        value+=add;

        sliders[Number(currentTestimonio)-1].classList.remove('testimonios_body--show'); 

        if(value === sliders.length+1 || value ===0 ){
            value=value===0 ? sliders.length :1;
        }

        sliders[value-1].classList.add('testimonios_body--show');
    }
})();
// Remove the extra closing curly brace '}' at the end of the code block
