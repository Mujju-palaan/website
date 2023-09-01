"use client"
import React from 'react';
import Footer from './components/Header&Footer/Footer'
import Header from './components/Header&Footer/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Auth0Provider } from '@auth0/auth0-react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Auth0Provider
        domain="sehat-nutrition.us.auth0.com"
        clientId="fBik1CI7kj0ZMpNswpne5z6OLAzDx5KD"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
      >
      
        
       
        <Header></Header>
        {children}
        <Footer></Footer>
        </Auth0Provider>,
        </body>
    </html>
  )
}
