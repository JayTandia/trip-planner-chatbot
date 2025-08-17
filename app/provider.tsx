"use client"

import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const CreateUser = useMutation(api.user.CreateNewUser)
  const [userDetail, setUserDetail] = useState<any>()
  const { user } = useUser()

  useEffect(() => {
    user && CreateNewUser()
  }, [user])
  

  const CreateNewUser = async () => {

    if(user){
      const result = await CreateUser({
      name: user?.fullName ?? ' ' ,
      email: user?.primaryEmailAddress?.emailAddress ?? ' ',
      imageUrl: user?.imageUrl
    })
    setUserDetail(result)
    }
  }

  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
    <div>
        <Header />
        {children}
    </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  return useContext(UserDetailContext)
}