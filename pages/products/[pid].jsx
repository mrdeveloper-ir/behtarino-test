import Head from "next/head";
import Product from "../../components/Product/Product";
import style from './ProductPage.module.css'

const ProductPage = ({ data }) => {
    return (
        <>
            <Head>
                <title>
                    {data.title}
                </title>
                <meta property="og:title" content={data.title} key="title" />
                <meta name="description" content={data.description} />

            </Head>
            <div className={style.Container}>
                <Product data={data} />
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { pid } = context.query
    // Here we can use higher efficient API caller like Axios - but it is just a test :)
    const res = await fetch(`https://fakestoreapi.com/products/${pid}`)
    const data = await res.json()

    return { props: { data } }
}

export default ProductPage