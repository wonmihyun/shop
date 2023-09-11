import React from 'react';
import {useAuthContext} from './AuthConfirm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {updateCart, getCart, deleteItemCart} from '../api/firebase';

// 장바구니 - 아이디 계정 인증 
export default function UseCart(){
    const {uid} = useAuthContext(); // 아이디 계정 
    const queryClient = useQueryClient();

    const cartInfo = useQuery(['cart', uid || ''], ()=> getCart(uid),{
        enabled : !!uid
    });

    // DetailPage CartItem 장바구니 가져오기
    const addItemCart = useMutation(
        (product) => updateCart(uid, product),
            {
                onSuccess : () => {
                queryClient.invalidateQueries(['cart', uid])
            }
        }
    )

    const deleteItem = useMutation((id)=>deleteItemCart(uid,id),{
            onSuccess : () => {
                queryClient.invalidateQueries(['cart',uid]);
                
            }
        }
    )


    // DetailPage로 보내기
    return {cartInfo, addItemCart, deleteItem};


}
