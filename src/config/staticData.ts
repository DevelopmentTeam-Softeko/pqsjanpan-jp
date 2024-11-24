export const ProfileUnAuthManus = [
  { name: 'Login', href: '/auth/sign-in' },
  { name: 'Create Account', href: '/auth/sign-up' },
]
export const ProfileAuthManus = [
  { name: 'My Profile', href: '/user/my-profile' },
  { name: 'Change Password', href: '/user/change-password' },
  { name: 'Logout', href: '/logout' },
]
export const UnAuthenticateManus = [
  { name: 'Home', href: '/' },
  { name: 'Order Stock', href: '/stock-list' },
  { name: 'All Stock', href: '/all-stock' },
  { name: 'Auto Parts', href: '/auto-parts' },
  { name: 'How to Buy', href: '/how-to-buy' },
  { name: 'Payment', href: '/payment-method' },
  { name: 'Shipping', href: '/shipping-method' },
  {
    name: 'About Us',
    href: '#',
    manus: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Company Profile', href: '/company-profile' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
  },
]
export const AuthenticateManusAgent = [
  { name: 'Home', href: '/', isExternal: false },
  { name: 'Dashboard', href: '/user/dashboard', isExternal: false },
  {
    name: 'Account Receivable',
    href: '/user/account-receivable',
    isExternal: false,
  },
  { name: 'Order Stock', href: '/stock-list' },
  { name: 'All Stock', href: '/all-stock' },
  { name: 'Payment', href: '/payment-method' },
  { name: 'Shipping', href: '/shipping-method' },
  {
    name: 'About Us',
    href: '#',
    manus: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Company Profile', href: '/company-profile' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
  },
  // { name: 'Invoice History', href: '/stock-list' },
  // { name: 'Payment History', href: '/stock-list' },
  // { name: 'Shipment History', href: '/stock-list' },
  // { name: 'Document History', href: '/stock-list' },
]
export const AuthenticateManusCustomer = [
  { name: 'Home', href: '/', isExternal: false },
  { name: 'Dashboard', href: '/user/dashboard', isExternal: false },
  { name: 'Order Stock', href: '/stock-list' },
  { name: 'All Stock', href: '/all-stock' },
  { name: 'Auto Parts', href: '/auto-parts' },
  { name: 'Payment', href: '/payment-method' },
  { name: 'Shipping', href: '/shipping-method' },
  {
    name: 'About Us',
    href: '#',
    manus: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Company Profile', href: '/company-profile' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
  },
]
export const CONTACT_TYPE = [
  {
    icon: '/svg/email-outline.svg',
    link: 'mailto:top@pqsjapan.jp',
    text: 'top@pqsjapan.jp',
    primaryContact: true,
  },
  {
    icon: '/svg/phone-outline.svg',
    link: 'tel:+81 80 4616 0505',
    text: '+81 80 4616 0505',
  },
  {
    icon: '/svg/whatsapp.svg',
    link: 'https://api.whatsapp.com/send?phone=818046160505',
    text: 'Whatsapp',
    showInFooter: true,
    primaryContact: true,
  },
  {
    icon: '/svg/viber-outline.svg',
    link: 'viber://chat/?number=%2B817015227575',
    text: 'Viber',
    showInFooter: true,
  },
  {
    icon: '/svg/skype-business.svg',
    link: 'skype:PQS Japan?chat',
    text: 'Skype',
    showInFooter: true,
  },
  {
    icon: '/svg/phone-outline.svg',
    link: 'tel:+81 90 5002 9024',
    text: '+81 90 5002 9024',
  },
]

export const CAR_MANUFACTURERS_LIST = [
  {
    name: 'Toyota',
    value: 1,
    icon: 'toyota',
  },
  {
    name: 'Nissan',
    value: 1,
    icon: 'nissan',
  },
  {
    name: 'Suzuki',
    value: 7,
    icon: 'suzuki',
  },
  {
    name: 'Honda',
    value: 3,
    icon: 'honda',
  },
  {
    name: 'Mitsubishi',
    value: 4,
    icon: 'mitsubishi',
  },
  {
    name: 'Mazda',
    value: 6,
    icon: 'mazda',
  },
  {
    name: 'Subaru',
    value: 5,
    icon: 'subaru',
  },
  {
    name: 'Isuzu',
    value: 8,
    icon: 'isuzu',
  },
  {
    name: 'Lexus',
    id: 11,
    icon: 'lexus',
  },
  {
    name: 'Hino',
    icon: 'hino',
  },
]

export const VEHICLE_TYPE = [
  {
    name: 'SUV',
    icon: '/svg/vehicle-type/suv.svg',
  },
  {
    name: 'Truck',
    icon: '/svg/vehicle-type/truck.svg',
  },
  {
    name: 'Pick up',
    icon: '/svg/vehicle-type/pick-up.svg',
  },
  {
    name: 'Van',
    icon: '/svg/vehicle-type/van.svg',
  },
  {
    name: 'Sedan',
    icon: '/svg/vehicle-type/sedan.svg',
  },
  {
    name: 'Bus',
    icon: '/svg/vehicle-type/bus.svg',
  },
  {
    name: 'Mini Van',
    icon: '/svg/vehicle-type/mini-van.svg',
  },
  {
    name: 'Hatchback',
    icon: '/svg/vehicle-type/hatchback.svg',
  },
  {
    name: 'Coupe',
    icon: '/svg/vehicle-type/coupe.svg',
  },
  {
    name: 'Convertible',
    icon: '/svg/vehicle-type/convertible.svg',
  },
  {
    name: 'Wagon',
    icon: '/svg/vehicle-type/wagon.svg',
  },
  {
    name: 'Mini Bus',
    icon: '/svg/vehicle-type/mini-bus.svg',
  },
  {
    name: 'Machinery',
    icon: '/svg/vehicle-type/machinery.svg',
  },
  {
    name: 'Forklift',
    icon: '/svg/vehicle-type/forklift.svg',
  },
  {
    name: 'Tractor',
    icon: '/svg/vehicle-type/tractor.svg',
  },
  {
    name: 'Tractor Head',
    icon: '/svg/vehicle-type/tractor-head.svg',
  },
  {
    name: 'Motorcycle',
    icon: '/svg/vehicle-type/motorcycle.svg',
  },
]

export const FAQ_DATA = [
  {
    category: 'General Questions',
    items: [
      {
        title: 'What Is PQS Japan?',
        description:
          'P=Price, Q=Quality, S=Service. We always try to make our customer happy with our best Support for buy directly From Japan.',
      },
      {
        title: 'Which Product PQS Japan Export?',
        description:
          'We Export Japanese Car, Auto parts Brand New or Reconditioned. Incas of customer request we also help to buy any kind of Japan product through our company.',
      },
    ],
  },
  {
    category: 'Country Regulations',
    items: [
      {
        title: 'Why Country Regulation is important to Know?',
        description:
          'In-Order to calculate import duty & knowing import rules, country regulation understanding is very important.',
      },
      {
        title: 'Where i can get information about Country Regulation?',
        description: 'Please Contact with your local customs authority',
      },
    ],
  },
  {
    category: 'Glossary Of Terms',
    items: [
      {
        title: 'What is pre export Inspection Certificate?',
        description:
          'The document accompanies to certify that the goods conform with specifications stated on the sales contract, issued by inspection agency from Japan.',
      },
      {
        title: 'Pre export Inspection Certificate mandatory for my country?',
        description:
          'The country where the vehicle will be registered for use, there authority can confirm please contact with them. If inspection is mendatory we will charge extera. Please confirm with us before pay.',
      },
    ],
  },
  {
    category: 'Buy Inventory',
    items: [
      {
        title: 'Can I buy a vehicle for use in Japan?',
        description:
          'No, as exporter we do not sell vehicles for domestic use in Japan.',
      },
      {
        title: 'Can i see inventory physically in Japan?',
        description:
          'No, every stock bond yard is not available for any visitors due to security reason, also every port yard is very far form each other.',
      },
    ],
  },
  {
    category: 'Buy Auction Order',
    items: [
      {
        title: 'Can i buy a vehicle from Japanese live auctions?',
        description:
          'Yes, we provide assistance in bidding and buying cars from Japanese live auctions.',
      },
      {
        title: 'How to buy from cars from Japanese live auctions?',
        description:
          'You are required to make an Advance Deposit before you can buy any vehicle from our auction. Please consult with us.',
      },
    ],
  },
  {
    category: 'Payment',
    items: [
      {
        title: 'What currencies do you accept?',
        description:
          'We accept payment in USD$ & JPY￥･, but you need to confirm before we issue invoice. No other currencies are accepted.',
      },
      {
        title: 'What kinds of payment method available?',
        description: 'We accept payments via bank transfer and paypal.',
      },
      {
        title: 'Who is responsible for paying the bank transfer fee?',
        description:
          'The buyer is responsible for all bank transfer fees. Please confirm the fund transfer fee with your bank.',
      },
    ],
  },
  {
    category: 'Booking & Shipping',
    items: [
      {
        title: 'What is Car Shipment Progress Link (CSP link)?',
        description:
          'This is one of personal web link to tracking the shipment. Once we process the payment you will get the link from us to track full shipment.',
      },
      {
        title:
          'How long will it take for the shipping vessel to reach my port?',
        description:
          'Basically Once we get the payment we start the shipment process, it takes about 1/2 weeks to load in the vessel. Usually it takes 5/8 weeks after vessel dispatch.\n',
      },
    ],
  },
  {
    category: 'Documentation',
    items: [
      {
        title: 'What documents am I supposed to receive from PQS Japan?',
        description:
          '1. Bill of Lading (B/L), 2. Insurance Document (if your purchase is CIF), 3. Export Certificate Original & English, 4. Commercial Invoice',
      },
      {
        title:
          'May i get also pe export inspection certificate from Japan authority?',
        description:
          'If your country requires, we will arrange inspection and issue certificate, Please must confirm with us before we issue invoice.',
      },
    ],
  },
  {
    category: 'Receiving Your Cargo',
    items: [
      {
        title:
          'Where can I get the actual arrival date of the shipping vessel?',
        description:
          "Please contact to the local shipping agent about one week prior the vessel's Arrival, Shipping document will show local shipping agent information.\n",
      },
      {
        title: 'How do I find a clearing agent?',
        description:
          'A person or company authorized by your local customs authorities who handle the customs clearing processes for your car or goods. Please Find in your local.',
      },
    ],
  },
]
export const FeaturedMakerList = [
  { name: 'Toyota', logo: 'https://placehold.co/100x50', id: 1 },
  { name: 'Ford', logo: 'https://placehold.co/100x50', id: 21 },
  { name: 'Honda', logo: 'https://placehold.co/100x50', id: 3 },
  { name: 'Chevrolet', logo: 'https://placehold.co/100x50', id: 19 },
  { name: 'BMW', logo: 'https://placehold.co/100x50', id: 13 },
  { name: 'Mercedes-Benz', logo: 'https://placehold.co/100x50', id: 12 },
]

export const ShopByType = [
  { name: 'Hatchback', logo: '/hatchback.png', id: 2 },
  { name: 'Compact', logo: '/compact.png', id: 1 }, // TODO: Identity missing
  { name: 'Convertible', logo: '/convertible.png', id: 11 },
  { name: 'Crossover', logo: '/crossover.png', id: 19 }, // TODO: Identity missing
  { name: 'Sedan', logo: '/sedan.png', id: 1 },
  { name: 'SUV', logo: '/suv.png', id: 3 },
]
