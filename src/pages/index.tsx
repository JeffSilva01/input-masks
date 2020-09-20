import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import { FiSmartphone } from 'react-icons/fi'

import InputMasks from '../components/InputMasks'

import { Container, Content } from '../styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Input Masks</title>
      </Head>

      <Content>
        <header>
          <h1>Input Masks</h1>
        </header>
        <InputMasks
          icon={FiSmartphone}
          type="text"
          mask="cel"
          placeholder="(00) 00000-0000"
        />
      </Content>
    </Container>
  )
}

export default Home
