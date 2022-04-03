import { useEffect, useState } from "react"

const useProducts = () => {
    const [watchProducts, setWatchProducts] = useState([]);

    useEffect(() => {
        fetch('reviewsData.json')
            .then(res => res.json())
            .then(data => setWatchProducts(data));
    }, []);
    return [watchProducts, setWatchProducts];

}
export default useProducts;