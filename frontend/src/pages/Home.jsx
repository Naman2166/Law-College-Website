import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import HomeAboutUs from '../components/home/HomeAboutUs'
import HomeCourses from '../components/home/HomeCourses'
import HomeDirectorDesk from '../components/home/HomeDirectorDesk'
import HomePrincipleMessage from '../components/home/HomePrincipleMessage'
import HomeNotices from '../components/home/HomeNotices'
import HomeAchievements from '../components/home/HomeAchievements'
import HomeCollegeLife from '../components/home/HomeCollegeLife'

const Home = () => {
  return (
    <div>
        <HomeHeader />
        <HomeAboutUs />
        <HomeCourses />
        <HomeDirectorDesk />
        <HomePrincipleMessage />
        <HomeNotices />
        <HomeAchievements />
        <HomeCollegeLife />
    </div>
  )
}

export default Home