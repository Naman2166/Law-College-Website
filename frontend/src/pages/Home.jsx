import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import HomeAboutUs from '../components/home/HomeAboutUs'
import HomeCourses from '../components/home/HomeCourses'
import HomeSecretaryDesk from '../components/home/HomeSecretaryDesk'
import HomePrincipleMessage from '../components/home/HomePrincipleMessage'
import HomeNotices from '../components/home/HomeNotices'
import HomeAchievements from '../components/home/HomeAchievements'
import HomeCollegeLife from '../components/home/HomeCollegeLife'
import SpotlightTicker from '../components/home/SpotlightTicker'

const Home = () => {
  return (
    <div>
        <SpotlightTicker />
        <HomeHeader />
        <HomeAboutUs />
        <HomeCourses />
        <HomeSecretaryDesk />
        <HomePrincipleMessage />
        <HomeNotices />
        <HomeAchievements />
        <HomeCollegeLife />
    </div>
  )
}

export default Home