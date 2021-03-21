document.querySelector('.loan-input').addEventListener('submit',function(e){
    document.querySelector('.loan-result').style.display = 'none';
  
    document.querySelector('#loading').style.display = 'block';
    
    setTimeout(calculateResults, 2000);
    
    e.preventDefault();
});

function calculateResults(e){
    const loanAmount = document.querySelector('#loan-amount');
    const interestRate = document.querySelector('#interest');
    const Years = document.querySelector('#years');
    const mothlyPayment = document.querySelector('#loan-amount-result');
    const totalAmount = document.querySelector('#interest-result');
    const totalInterest = document.querySelector('#years-result');

    const principal = parseFloat(loanAmount.value);
    const interest = parseFloat(interestRate.value);
    const years = parseFloat(Years.value);

    const monthly =((principal*(interest/100)));
    const totalinterest = (years);
    
    if(isFinite(monthly)){
        mothlyPayment.value = ((monthly+principal)/(12*(totalinterest))).toFixed(2);
        totalAmount.value =(monthly+principal).toFixed(2);
        totalInterest.value = monthly.toFixed(2);
        document.querySelector('.loan-result').style.display = 'block';
  
        document.querySelector('#loading').style.display = 'none';
    }
    else {
            showError('Please check your numbers');
      }

     
}
function showError(error){
    const errorDiv =document.createElement('div');
    const loanform =document.querySelector('.loan-form');
    const heading =document.querySelector('h1');
    document.querySelector('.loan-result').style.display = 'none';
  
    // Hide loader
    document.querySelector('#loading').style.display = 'none';
    errorDiv.className ='alert';
    errorDiv.appendChild(document.createTextNode(error));

    loanform.insertBefore(errorDiv,heading);
    setTimeout(clearError, 3000);

}
function clearError(){
    document.querySelector('.alert').remove();
  }