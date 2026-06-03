const arr=[];
let income=0;
let expense=0;
const balanceF=document.querySelector('#bal');
const expenseF=document.querySelector('#expense');
const incomeF=document.querySelector('#income');
const form=document.querySelector('form');
const list=document.querySelector('#lis');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.querySelector('#name').value;
    const amount=parseInt(document.querySelector('#amount').value);
    const type=document.querySelector('#type').value;
    let a=[name,amount,type];
    arr.push(a);
    if(name!="" && amount>=0 && (type==='withdraw' || type==='WITHDRAW' || type==='deposit' || type==='DEPOSIT' )){
    if(type==='withdraw' || type==='WITHDRAW')
    {
        expense=expense+amount;
        
    }
    else if(type==='deposit' || type==='DEPOSIT'){
        income=income+amount;
    }
    if(arr.length!=0)
{
    balanceF.innerHTML=`<h2>BALANCE : ${income-expense}</h2>`
    expenseF.innerHTML=`<h2>EXPENSE : ${expense}</h2>`
    incomeF.innerHTML=`<h2>INCOME : ${income}</h2>`
    const li=document.createElement('li');
    li.innerHTML=`<span>${name}</span>
    <span>${amount}</span>
    <span>${type}</span>
    <button class="delete-btn">DELETE</button>`;
    const del=li.querySelector('.delete-btn');
    del.addEventListener('click',()=>{
        li.remove();
        if(type==='deposit' || type==='DEPOSIT')
        {
            income=income-amount;
        }
        else if(type==='withdraw' || type==='WITHDRAW')
    {
        expense=expense-amount;
        
    }
    balanceF.innerHTML=`<h2>BALANCE : ${income-expense}</h2>`
    expenseF.innerHTML=`<h2>EXPENSE : ${expense}</h2>`
    incomeF.innerHTML=`<h2>INCOME : ${income}</h2>`
    });
    list.appendChild(li);

}
else{
    balanceF.innerHTML=`<h2>balance : 0</h2>`
    expenseF.innerHTML=`<h2>EXPENSE : 0</h2>`
    incomeF.innerHTML=`<h2>EXPENSE : 0</h2>`
}}
else{
    alert('enter correct value');
}



    
})

