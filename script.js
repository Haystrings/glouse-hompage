const product = [
        {
            name: "Beans",
            marketPrice: "₦9,500",
            ourPrice: "₦9,000",
            imageUrl: "images/products/beans.webp"
        },
        {
            name: "Rice",
            marketPrice: "₦85,000",
            ourPrice: "₦70,000",
            imageUrl: "images/products/rice.webp"
        },
        {
            name: "Yam",
            marketPrice: "₦4,000",
            ourPrice: "₦2,800",
            imageUrl: "images/products/yam.webp"
        },
        {
            name: "Spaghetti",
            marketPrice: "₦1,250",
            ourPrice: "₦1,180",
            imageUrl: "images/products/spag.webp"
        },
        {
            name: "Oil (1L)",
            marketPrice: "₦4,700",
            ourPrice: "₦4,200",
            imageUrl: "images/products/spag.webp"
        },
        {
            name: "Elubo (Yam flour)",
            marketPrice: "₦4,500",
            ourPrice: "₦3,500",
            imageUrl: "images/products/elubo.webp"
        }
    ];

const QnAs = [
    {
        question: "How much is delivery fee?",
        answer: "• Next day delivery. <br> • Same Day Delivery"
    },
    {
        question: "How long after I order will you deliver?",
        answer: "Your delivery time is dependent on the delivery option you choose, we have next day deliveries and same day deliveries"
    },
    {
        question: "How do I make payment?",
        answer: "You can make payments via transfer/card from the app"
    },
    {
        question: "How do I track my order?",
        answer: "We give you real time updates via app notifications at every point of your delivery process."
    },
    {
        question: "How can I contact you?",
        answer: "You can reach us via email at hello@useglouse.com or via any of our social media pages."
    },
]

const productDiv = document.querySelector(".product-container");

product.forEach((item, i) =>{
    const productItem = document.createElement('div');
    productItem.className = 'product flex-column';
    productItem.innerHTML = `
        <div class="product-image"><img class = "image${i}" src="${item.imageUrl}" alt=""></div>
        <div class="product-details">
            <h4> ${item.name} </h4>
            <div class="price-container flex-center">
                <div class="market-price-content">
                    <p class="market-price">Market Price</p>
                    <p class="price price-cancel">${item.marketPrice}</p>
                </div>
                <div class="our-price-content">
                    <p class="market-price">Our Price</p>
                    <p class="price price-normal">${item.ourPrice}</p>
                </div>
            </div>
        </div>
    `;
    
    productDiv.appendChild(productItem);
});

const questionContainer = document.querySelector(".FAQS-list")
QnAs.forEach((QnA,i)=>{
    const customerQuestion = document.createElement('li');
    customerQuestion.className = 'flex-column';
    customerQuestion.innerHTML = `
        <div class="question space-between width-100 flex-center">
                                    <p>${QnA.question}</p>
                                    <button class="show-answer flex-center" href=""><svg width="2em" height="2em" viewBox="0 0 24 24" class="chevron size-6" data-astro-cid-z6gx6xcw="" data-icon="ri:arrow-down-s-line">  <symbol id="ai:ri:arrow-down-s-line"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"></path></symbol><use xlink:href="#ai:ri:arrow-down-s-line"></use>  </svg></button>
                                </div>
                                <div hidden class="answer">
                                    <p>${QnA.answer}</p>
                                </div>
                                <hr>
    `
    questionContainer.appendChild(customerQuestion)
})

const showAnswer = document.querySelectorAll(".show-answer");
const FAQanswer = document.querySelectorAll(".answer")
let rotated = true;
for(let i=0;i<showAnswer.length; i++){
    showAnswer[i].addEventListener('click', () => {
    rotated = !rotated
    FAQanswer[i].hidden = !FAQanswer[i].hidden;
    showAnswer[i].style.transform = rotated ? 'rotate(0deg)' : 'rotate(180deg)'
    showAnswer[i].style.transition = 'all 0.5s ease-in-out'
}) 
}
