const components = document.getElementsByClassName('component');
const componentTitle = document.getElementsByClassName('plan');
const componentSubscription = document.getElementsByClassName('subscription');
const componentStorage = document.getElementsByClassName('storage');
const componentUsersAlllowed = document.getElementsByClassName('users-nr');
const componentTransfer = document.getElementsByClassName('transfer');


//  data for prcing component
const pricingComponentData = [
    {
        title: 'Basic',
        subscriptionMonthly: 19.99,
        subscriptionAnnually: 199.99,
        storage: 500,
        users: 2,
        transfer: 3
    },
    {
        title: 'Professional',
        subscriptionMonthly: 24.99,
        subscriptionAnnually: 249.99,
        storage: '1 TB Storage',
        users: 5,
        transfer: 10
    },
    {
        title: 'Master',
        subscriptionMonthly: 39.99,
        subscriptionAnnually: 399.99,
        storage: '2 TB Storage',
        users: 10,
        transfer: 20
    },
]

// loop every component and assign values from pricingComponentData Array to right varaibles 
for (let i = 0; i < pricingComponentData.length; i++) {
    componentTitle[i].innerText = pricingComponentData[i].title
    componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
    // if (pricingComponentData[i].storage.innerText < 500) {
    //     componentStorage[i].innerText = pricingComponentData[i].storage + ' GB Storage'
    // } else {
    //     componentStorage[i].innerText = pricingComponentData[i].storage + ' TB Storage'
    // }
    componentStorage[i].innerText = pricingComponentData[i].storage
    componentUsersAlllowed[i].innerText = pricingComponentData[i].users + ' Users Allowed'
    componentTransfer[i].innerText = 'Send up to ' + pricingComponentData[i].transfer + ' GB'
}