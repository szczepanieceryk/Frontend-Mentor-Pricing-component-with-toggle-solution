// assign elements of a component to variables
const component = document.getElementsByClassName('component')
const componentTitle = document.getElementsByClassName('plan');
const componentSubscription = document.getElementsByClassName('subscription');
const componentStorage = document.getElementsByClassName('storage');
const componentUsersAlllowed = document.getElementsByClassName('users-nr');
const componentTransfer = document.getElementsByClassName('transfer');
const componentButton = document.getElementsByClassName('btn');

const toggleSwitch = document.getElementById('toggle-switch');
const switchDiv = document.getElementById('switch');

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
        transfer: 3,
        btn: 'Learn More'
    },
    {
        title: 'Professional',
        subscriptionMonthly: 24.99,
        subscriptionAnnually: 249.99,
        storage: 1,
        users: 5,
        transfer: 10,
        btn: 'Learn More'
    },
    {
        title: 'Master',
        subscriptionMonthly: 39.99,
        subscriptionAnnually: 399.99,
        storage: 2,
        users: 10,
        transfer: 20,
        btn: 'Learn More'
    },
]

// initial component state
// loop every component and assign values from pricingComponentData Array to right varaibles 
for (let i = 0; i < pricingComponentData.length; i++) {
    componentTitle[i].innerText = pricingComponentData[i].title
    componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
    componentStorage[0].innerText = pricingComponentData[0].storage + ' GB Storage'
    componentStorage[i].innerText = pricingComponentData[i].storage + ' TB Storage'
    componentUsersAlllowed[i].innerText = pricingComponentData[i].users + ' Users Allowed'
    componentTransfer[i].innerText = 'Send up to ' + pricingComponentData[i].transfer + ' GB'
    componentButton[i].innerText = pricingComponentData[i].btn
}

// change boolean value of isChecked flag
// change the subscription price
toggleSwitch.addEventListener('click', () => {
    isChecked = !isChecked
    switchDiv.classList.toggle('toggle')
    for (let i = 0; i < pricingComponentData.length; i++) {
        if (isChecked) {
            componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionAnnually

        } else {
            componentSubscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
        }
    }
})

