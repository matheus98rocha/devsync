'use client'
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
  children: string | JSX.Element | JSX.Element[] | ReactNode
}

function Provider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
