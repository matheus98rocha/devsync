'use client'
import React from 'react'

import LoaggedUser from '@/app/ui/layout/logged-user/logged-user'
import Loading from '@/app/ui/components/loading/loading.component'

function About() {

  return (
    <LoaggedUser>
      <h1>Sobre</h1>
    </LoaggedUser>
  )
}

export default About
