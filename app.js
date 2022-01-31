// assign elements of a component to variables
const componentTitle = document.getElementsByClassName('plan');
const componentSubscription = document.getElementsByClassName('subscription');
const componentStorage = document.getElementsByClassName('storage');
const componentUsersAlllowed = document.getElementsByClassName('users-nr');
const componentTransfer = document.getElementsByClassName('transfer');

const toggleSwitch = document.getElementById('flexSwitchCheckChecked');

// boolena flag for toggle switch
let isChecked = false;

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

// initial component state
// loop every component and assign values from pricingComponentData Array to right varaibles 
for (let i = 0; i < pricingComponentData.length; i++) {
    componentTitle[i].innerText = pricingComponentData[i].title
    componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
    componentStorage[i].innerText = pricingComponentData[i].storage
    componentUsersAlllowed[i].innerText = pricingComponentData[i].users + ' Users Allowed'
    componentTransfer[i].innerText = 'Send up to ' + pricingComponentData[i].transfer + ' GB'

    componentTitle[i].innerText = pricingComponentData[i].title
    componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
    componentStorage[i].innerText = pricingComponentData[i].storage
    componentUsersAlllowed[i].innerText = pricingComponentData[i].users + ' Users Allowed'
    componentTransfer[i].innerText = 'Send up to ' + pricingComponentData[i].transfer + ' GB'
}

// change boolean value of isChecked flag
// change the subscription price
toggleSwitch.addEventListener('click', () => {
    isChecked = !isChecked
    for (let i = 0; i < pricingComponentData.length; i++) {
        if (isChecked) {
            componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionAnnually

        } else {
            componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
        }
    }
})

