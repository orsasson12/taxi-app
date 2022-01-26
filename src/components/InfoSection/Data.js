import img1 from '../../assets/images/undraw_about_me_re_82bv.svg'
import img2 from '../../assets/images/undraw_treasure_of-9-i.svg'

const arrImg = [img1, img2]
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'See Our Works',
    headLine: 'Working All Around The Country',
    description: `We work all over the country and do different projects`,
    imgStart: false,
    img: arrImg[0],
    alt: 'TeamWork',
    dark: true,
    primary: true,
    darkText: false,
    linktext: false

}
export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Our Collbas',
    headLine: 'Companies',
    description: 'we have a lot of companies we are working with like shatit luftansa pathal',
    imgStart: true,
    img: arrImg[1],
    alt: 'collab',
    dark: false,
    primary: false,
    darkText: true,
    linktext: false
}