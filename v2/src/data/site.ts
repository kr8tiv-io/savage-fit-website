/* Single source of truth for links, contact, and checkout URLs. */

export const TRAINERIZE = 'https://www.trainerize.me/profile/ahf/?planGUID='

export const checkout = {
  subMonthly: `${TRAINERIZE}f68da45b7ea34dd8b4b06ea823ba5936`,
  subQuarterly: `${TRAINERIZE}444f4fd7e0c4437491fac0868d2b011e`,
  subYearly: `${TRAINERIZE}cfc4953960024b8a84730742df76a21b`,
  mealPlan: `${TRAINERIZE}124a2ce80406490f87476fa07cd5e6b5`,
  fourWeekCustom: `${TRAINERIZE}44d59532ecb0470b912f871c986aac85&mode=checkout`,
  coachingMonthly: `${TRAINERIZE}370abf26b84441dcaadb92c3c8d6335e`,
  coachingQuarterly: `${TRAINERIZE}1302f5ce6801494e8ae7172a1f9eb86a`,
  coachingBiannual: `${TRAINERIZE}b1bb2fa7dd6640b397b4ec69dec49d2a`,
  si6Lite: `${TRAINERIZE}f792b0daedb641bc935c57fa77f4680e`,
  si6Full: `${TRAINERIZE}fcbfef03819e48e5b5fc7b17c134b4a2`,
  springLite: `${TRAINERIZE}37d9bed6aa3b41e2ab1ba68404befab6`,
  springFull: `${TRAINERIZE}a06fbc4753984f62aaadf7a50401f9ee`,
  mattMonthly: `${TRAINERIZE}adf14e4046d749828c3a66743b4f2bff`,
  mattQuarterly: `${TRAINERIZE}c96c20b932a84307a2751f55a34cf150`,
  mattYearly: `${TRAINERIZE}ad086f8c41d144f5ad14b6cc164d9915`,
  angieMonthly: `${TRAINERIZE}33a1661055e449ac9f37226a03bf9918`,
  angieQuarterly: `${TRAINERIZE}8e324e335e794b0db3f522cf6c9c9c7e`,
  angieYearly: `${TRAINERIZE}adfa1fe73d6d46ceb3ed7a5719b4816d`,
  mensMonthly: `${TRAINERIZE}0d0d131b51ba4590bed1c194865882f4`,
  mensQuarterly: `${TRAINERIZE}39fbff6ff5e04cddb29a28bdfeffa52a`,
  mensYearly: `${TRAINERIZE}f1463a2406d447c9a726b7a06f6f16f0`,
}

export const social = {
  instagram: 'https://www.instagram.com/ifbb_pro_xenia',
  facebook: 'https://www.facebook.com/share/g/1FuZt9rNVM/',
  email: 'mailto:Xeniaa@gmail.com',
  upgradeNutrition:
    'mailto:xeniaab@icloud.com?subject=Spring%20Aesthetic%20Member%20Upgrade%20-%20Custom%20Nutrition',
  upgradeCoached:
    'mailto:xeniaab@icloud.com?subject=Spring%20Aesthetic%20Member%20Upgrade%20-%20Coached%20Execution',
}

export const routes = [
  { path: '/', label: 'Home' },
  { path: '/subscription', label: 'Subscription' },
  { path: '/training', label: '1-on-1 Coaching' },
  { path: '/challenges', label: 'Si6 Challenge' },
  { path: '/spring-aesthetic', label: 'Spring Aesthetic' },
  { path: '/products', label: 'Products' },
]
