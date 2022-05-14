import ReactStars from 'react-rating-stars-component';
import PrimaryButton from '../UI/Botton/PrimaryButton/PrimaryButton';
import style from './Product.module.css'

const Product = ({ data }) => {
    return (
        <div className={style.ItemContainer}>
            <section className={style.ImageSection}>
                <img src={data.image} alt="" />
            </section>
            <section className={style.ProductInfoSection}>
                <div className={style.ProductHeader}>

                    <h1 className={style.ProductTitle}>
                        {data.title}
                    </h1>
                    <div className='d-flex align--center'>
                        <ReactStars
                            size={20}
                            isHalf={true}
                            value={data.rating.rate}
                            edit={false}
                        />
                        ({data.rating.rate})
                    </div>
                </div>
                <div className={style.ProductGategory}>
                    {data.category}
                </div>
                <div className={style.PriceContainer}>
                    ${data.price}
                </div>

                <div className={style.DescriptionTitle}>
                    DESCRIPTION
                </div>

                <p className={style.Description}>
                    {data.description}
                </p>

                <div className={style.Options}>
                    THERE IS NO OPTION AVALIABLE to perform this section
                    <br />
                    we can manage those options with some simple useState()
                    <br />
                    If you want I can perform just view without function

                </div>

                <div className={style.Action}>

                    <PrimaryButton>
                        ADD TO CARD
                    </PrimaryButton>
                </div>

            </section>

        </div>
    )

}

export default Product