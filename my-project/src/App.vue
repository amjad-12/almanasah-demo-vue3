<script>
import NavBar from './components/navs/NavBar.vue'
import CheckNavBar from './components/navs/CheckNavBar.vue'
import HeroInfo from './components/hero/HeroInfo.vue'
import HeroImage from './components/hero/HeroImage.vue'
import FeatureInfo from './components/features/FeaturesInfo.vue'
import FeaturesBoxesContainer from './components/features/FeaturesBoxesContainer.vue'
import OurProducts from './components/OurProducts.vue'
import MobileVideo from './components/mobile/MobileVideo.vue'
import MobileInfo from './components/mobile/MobileInfo.vue'
import AdvantagesContainer from './components/advantages/advantagesContainer.vue'
import PlansContainer from './components/plans/PlansContainer.vue'
import ContactUsContainer from './components/contact/ContactUsContainer.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  components: {
    NavBar: NavBar,
    CheckNavBar: CheckNavBar,
    HeroInfo: HeroInfo,
    HeroImage: HeroImage,
    FeatureInfo: FeatureInfo,
    FeaturesBoxesContainer: FeaturesBoxesContainer,
    OurProducts: OurProducts,
    MobileVideo: MobileVideo,
    MobileInfo: MobileInfo,
    AdvantagesContainer: AdvantagesContainer,
    PlansContainer: PlansContainer,
    ContactUsContainer: ContactUsContainer,
    FooterBar: FooterBar
  }
}

</script>

<template>
  <body class="Mycontainer">
    <NavBar></NavBar>
    <CheckNavBar></CheckNavBar>
    <HeroInfo></HeroInfo>
    <HeroImage></HeroImage>
    <FeatureInfo></FeatureInfo>
    <FeaturesBoxesContainer></FeaturesBoxesContainer>
    <OurProducts></OurProducts>
    <MobileVideo></MobileVideo>
    <MobileInfo></MobileInfo>
    <AdvantagesContainer></AdvantagesContainer>
    <PlansContainer></PlansContainer>
    <ContactUsContainer></ContactUsContainer>
    <FooterBar></FooterBar>
  </body>
</template>

