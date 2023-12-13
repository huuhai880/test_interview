import React, { useCallback, useEffect, useState } from "react";
import { fetchAxios } from "../../service/axios_client";


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://knfitclombergpbakkao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuZml0Y2xvbWJlcmdwYmFra2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NjMxOTcsImV4cCI6MjAxODAzOTE5N30.jmVz-tapwJlBZDOcG3uF264jdRn0q7d1zNG9MdqMn-s')

const ProductPages = () => {

    const [dataProduct, setDataProduct] = useState([])


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