import React from 'react'
import Introsection from '../components/section_intro'
import Footer from '../components/footer'
import ResponsiveCardsTemplate from '../components/responsiveCardsTemplate'
import Banner from '../components/section_banner'
import Header from '../components/header'
import Section_intro from '../components/section_intro'
import Section_cards from '../components/Section_cards'
import Section_gallery from '../components/section_gallery'
import Section_banner from '../components/section_banner'
import Section_hero from '../components/section_hero'
import Section_team from '../components/section_team'
import Section_contact from '../components/section_contact'

function Home() {
  return (
    <>
    <div class="hero-bg-light-olive h-full">Home
        <Section_hero></Section_hero>
        <Section_intro></Section_intro>
        <Section_cards></Section_cards>
        <Section_gallery></Section_gallery>
        <Section_team></Section_team>
        <Section_banner></Section_banner>
        <Section_contact></Section_contact>
        <Footer></Footer>
        {/* <ResponsiveCardsTemplate/> */}
    </div>
    </>
      )
}

export default Home