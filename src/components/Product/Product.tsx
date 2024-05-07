import classes from "./Product.module.scss"

const Product = () => {
    const position = {
        id: 1,
        name: "Наручные часы мужские SKMEI 1251",
        imageUrl: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
        price: 8165,
        discount: 90,
        rating: 4.7,
        isFavorite: false
    };

    return (
        <div className={classes.product}>

            <img className={classes.product__imgPosition} src={position.imageUrl} alt="dissconnect" />

            <div>
                <span>{position.name}</span>
                <ul>
                    <li>id: {position.id}</li>
                    <li>Цена: {position.price} ₽</li>
                    <li>Скидка:  {position.discount}%</li>
                    <li>Рейтинг: {position.rating}</li>
                    <li>
                        Избранное:
                        {position.isFavorite ? <img className={classes.product__img} src="/like.svg" alt="like" />
                            : <img className={classes.product__img} src="/unLike.svg" alt="like" />
                        }
                    </li>
                </ul>
            </div>

        </ div>
    )
}

export default Product;