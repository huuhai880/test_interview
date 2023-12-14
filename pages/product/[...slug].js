import { fetchAxios } from "../../service/axios_client";

const DetailProduct = (props={}) =>{

    const {detail ={}} =props

    return(
        <div>
            {detail?.title}
        </div>
    )
}

export async function getServerSideProps(ctx) {
    try {
        let {slug = null} = ctx.query;

       
        //Lấy danh sách chủ đề theo chủ đề cha
        const result = await fetchAxios(`/products/${slug[0]}`)

        if (!result) {
            return {notFound: true};
        }
       

        return {
            props: {
                detail: result
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}


export default DetailProduct

