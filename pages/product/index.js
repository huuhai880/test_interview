import React, { useCallback, useEffect, useState } from "react";
import { fetchAxios } from "../../service/axios_client";
import { useRouter } from 'next/router'


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://tdnjzbozwadslfmvkruy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbmp6Ym96d2Fkc2xmbXZrcnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0Njg2MjksImV4cCI6MjAxODA0NDYyOX0.Dq_kZ0LbNB-vv4Ntk4z3FzTdWN-bKiVVdYfw4zwN1cA')

const ProductPages = () => {

    const [dataProduct, setDataProduct] = useState([])

    const router = useRouter()


    const fetchAPI = useCallback(async () => {

        try {

            const result = await fetchAxios("/products")

            if(result){
                setDataProduct(result)
            }

        } catch (error) {
            console.log(error)
        }

    }, [])


    useEffect(() => {

        fetchAPI()

    }, [])

    const handleClick = async(item={}) =>{
        

        const { error } = await supabase
        .from('products')
        .insert({  product_name: item?.title})

        router.push(`product/${item?.id}`)

    }


    return (
        <div className="w-full h-full flex justify-center p-[20px]">

            <div className="wrap-card grid md:grid-cols-4 grid-cols-1 flex-col w-full gap-x-[50px] gap-y-[16px]  mb-6">
            {dataProduct.length > 0 ? dataProduct.map((item,key)=>{
                return(
                    <div key={key} className="h-[100px] mb-2 border-[1px] p-[8px] rounded-[8px] cursor-pointer" onClick={()=>handleClick(item)}> 
                        {item?.title}
                    </div>
                )
            }):null}
            </div>


        </div>
    )
}

export default ProductPages;