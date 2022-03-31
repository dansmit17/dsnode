const target=document.getElementById('subId')

target.addEventListener('paste', (event)=>{
  setTimeout(function() {
    window.open('https://ccrc.cisco.com/subscriptions/detail/'+event.target.value, '_blank')

  }, 100);
})