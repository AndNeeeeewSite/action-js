//              1.
body = document.querySelector('body')
bodyList = body.children
form = bodyList[1]
formList = form.children
colorRed = formList[1]
colorWhite = formList[2]
colorGreen = formList[3]
body.style.backgroundColor = 'red'
colorRed.addEventListener('change',function(){
    body.style.backgroundColor = 'red'
})
colorWhite.addEventListener('change',function(){
    body.style.backgroundColor = 'white'
})
colorGreen.addEventListener('change',function(){
    body.style.backgroundColor = 'green'
})
//                  2.
nameinput = document.querySelector('#name-input')
name_output = document.querySelector('#name-output')
nameinput.addEventListener('input',function(){
    nameinputtext = nameinput.value
    if( nameinputtext == ''){
        nameinputtext = 'незнайомець'
    }
    name_output.textContent = nameinputtext
})
//                2.1.
validation_input = document.querySelector('#validation-input')
data_length = validation_input.getAttribute('data-length')
validation_input.addEventListener('change',function(){
    validation_input_text = validation_input.value
    if(validation_input_text.length == data_length){
        validation_input.className = 'valid'
        console.log('Усе вірно')
    }
    else{
        validation_input.className = 'invalid'
        console.log('Тут не 6 символів')      
    }
})
//                 3.
font_size_control = document.querySelector('#font-size-control')
text = document.querySelector('#text')
font_size_control.addEventListener('input',function(){
    font_size = font_size_control.value
    text.style.fontSize = font_size + 'px'

})
//                 4.
openModalButt = document.querySelector('.button[data-action = "open-modal"]')
closeModalButt = document.querySelector('.button[data-action = "close-modal"]')
modalBackdrop = document.querySelector('.js-backdrop')
openModalButt.addEventListener('click',function(){
    modalBackdrop.setAttribute('id','show-modal')
})
closeModalButt.addEventListener('click',function(){
    modalBackdrop.setAttribute('id','')
})