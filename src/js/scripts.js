const form = document.getElementsByClassName('form')[0]
const input__box = form.querySelectorAll('.form__inputs')
const inputs = form.querySelectorAll('.form__input')
const button = form.querySelector('.form__button')

let cont = 0;

const errorMsg = (input)=>{
  input.parentElement.classList.add('alert__img')
  input.nextElementSibling.classList.add('active')
}

const hideErrorMsg = (input)=>{
  input.parentElement.classList.remove('alert__img')
  input.nextElementSibling.classList.remove('active')
}

/* Validations */
const validationInput = ()=>{
  inputs.forEach((input)=>{
    if(input.type == 'text' || input.type == 'password'){
      validationText(input)
    }else if(input == inputs[2]){
      validationEmail(input)
    }
  })
}

const validationText = (input)=>{
  if(input.value == "" || input.value == null){
    errorMsg(input)
    cont = 0
  }else if(input.value !== ""){
    hideErrorMsg(input)
    cont++
  }
}

const validationEmail = (input)=>{
  const EmailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  if(input.value == "" || input.value == null){
    errorMsg(input)
    cont = 0
  }else if(!EmailReg.test(input.value)){
    errorMsg(input)
    cont = 0
  }else {
    hideErrorMsg(input)
    cont++
  }
}


button.addEventListener('click',(e)=>{
    e.preventDefault()
    validationInput()
    if(cont>=4){
      form.submit()
    }else console.log('Hello')
})