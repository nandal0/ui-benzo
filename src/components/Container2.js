import React from 'react'
import ItemCard from './ItemCard'
import SectionCard from './SectionCard'

const Container2 = () => {
    return (
        <div>
            <div className="containerr2">
                <div className="section-wrap">
                    <div className="section-title section">
                        <div className="title-details">
                            <p>
                                Taking care of your business needs <br /> every step of the way
                            </p>
                        </div>
                    </div>
                    <div className="secton-card section">
                        <div className="card-details">
                            <SectionCard/>
                            <SectionCard/>

                        </div>
                        <div className="card-details">
                            <SectionCard/>
                            <SectionCard/>

                        </div>
                    </div>
                    <div className="section-title section">
                        <div className="title-details">
                            <p>
                                Taking care of your business needs <br /> every step of the way
                            </p>
                        </div>
                    </div>
                    <div className="section-iteems section">
                        <div className="item-details">
                            <ItemCard 
                            image="https://borzodelivery.com/in/elementor/content/uploads/2022/03/entry__group__1.png"
                            title="E-shop items"
                            text="Any packages up to 20kg with cash on delivery and buyout options"
                            />
                            <ItemCard 
                            image="https://borzodelivery.com/in/elementor/content/uploads/2022/03/entry__group__2.png"
                            title="Documents"
                            text="Our couriers can deliver and return signed documents fast and secure it in a paper-case"
                            />
                            <ItemCard 
                            image="https://borzodelivery.com/in/elementor/content/uploads/2022/03/entry__group__3.png"
                            title="Clothes and shoes
                            "
                            text="Free waiting time on the address so that your client can make their decision"
                            />
                           
                        </div>
                        <div className="item-details">
                            <ItemCard 
                            image="https://borzodelivery.com/in/elementor/content/uploads/2022/03/entry__group__4-1.png"
                            title="Food and groceries
                            "
                            text="We use insulated backpacks to preserve the taste — whether the food is hot or frozen"
                            />
                            <ItemCard 
                            image="https://borzodelivery.com/in/elementor/content/uploads/2022/03/entry__group__5.png"
                            title="Flowers and gifts
                            "
                            text="All fragile and delicate items are handled with maximum care and attention"
                            />
                            <ItemCard 
                            image="https://borzodelivery.com/in/elementor/content/uploads/2022/03/entry__group__6.png"
                            title="And anything else

                            "
                            text="We will take into account the qualities of the item and all your requests
                            "
                            />
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container2