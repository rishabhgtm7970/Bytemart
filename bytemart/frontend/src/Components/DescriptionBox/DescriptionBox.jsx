import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade" >Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>This eCommerce website is an online shopping platform where users
                    can easily browse and purchase products. It offers a clean and
                    simple interface that allows customers to explore different
                    categories, search for specific items, and view detailed information
                    about each product. Users can add items to their cart, review their
                    selections, and place orders conveniently. The website also includes
                    user login and signup features to create personalized experiences. Designed to be responsive,
                    the website works smoothly on both computers and mobile devices, making
                    online shopping accessible and enjoyable for everyone.
                </p>
                <p>This eCommerce website is a user-friendly online store where people
                     can browse products, add items to their cart, and make purchases
                      with ease. It offers a smooth shopping experience with simple 
                    navigation, product details, and secure login for customers. 
                    The platform is designed to work well on both desktop and mobile devices.</p>
            </div>
        </div>
    )
}

export default DescriptionBox