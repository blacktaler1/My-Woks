clickp = document.querySelector('#click_plus')
clickm = document.querySelector('#click_minus')

clickp1 = document.querySelector('#click_plus1')
clickm1 = document.querySelector('#click_minus1')

clickp2 = document.querySelector('#click_plus2')
clickm2 = document.querySelector('#click_minus2')

clickp3 = document.querySelector('#click_plus3')
clickm3 = document.querySelector('#click_minus3')

texthidden = document.querySelector('#hidden_text')

texthidden1 = document.querySelector('#hidden_text1')

texthidden2 = document.querySelector('#hidden_text2')

texthidden3 = document.querySelector('#hidden_text3')

clickp.addEventListener('click', e =>{
   texthidden.style.display = 'block'
   clickp.style.display = 'none'
   clickm.style.display = 'block'

} )
clickm.addEventListener('click', e =>{
   texthidden.style.display = 'none'
   clickm.style.display = 'none'
   clickp.style.display = 'block'
   
})

clickp1.addEventListener('click', e =>{
   texthidden1.style.display = 'block'
   clickp1.style.display = 'none'
   clickm1.style.display = 'block'

} )
clickm1.addEventListener('click', e =>{
   texthidden1.style.display = 'none'
   clickm1.style.display = 'none'
   clickp1.style.display = 'block'
   
})

clickp2.addEventListener('click', e =>{
   texthidden2.style.display = 'block'
   clickp2.style.display = 'none'
   clickm2.style.display = 'block'

} )
clickm2.addEventListener('click', e =>{
   texthidden2.style.display = 'none'
   clickm2.style.display = 'none'
   clickp2.style.display = 'block'
   
})

clickp3.addEventListener('click', e =>{
   texthidden3.style.display = 'block'
   clickp3.style.display = 'none'
   clickm3.style.display = 'block'

} )
clickm3.addEventListener('click', e =>{
   texthidden3.style.display = 'none'
   clickm3.style.display = 'none'
   clickp3.style.display = 'block'
   
})