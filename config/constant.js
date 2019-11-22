
module.exports = {
    ROLE: {
        SERVICE_PROVIDER: 'SERVICEPROVIDER',
        USER: "USER",
        WAREHOUSE: "WAREHOUSE",
        DRIVER: "DRIVER"
    },
    MESSAGE:{
        HELP_REQUEST:'{} has requested for callback',
        SERVICE_NOT_AVAILABLE:'Our services are currently not available for your address. Please check again later.',
        USER_REG_MESSAGE:'Your OTP (One Time Password) to register with SwitzGo is {}',
        SOMETHING_WENT_WRONG:"Something went wrong",
        UNASSIGN_ORDER:'An order with order id {} has been gone unassigned',
        ITEM_ADDED_FOR_VERIFICATION:'{} has added an item, please verify the item.',
        ITEM_EDIT_FOR_VERIFICATION:'{} has edited an item, please verify the item.',
        EMAIL_PASSWORD_NOT_MATCH:"Invalid email or password", 
        PHONE_PASSWORD_NOT_MATCH:"Invalid phone number or password", 
        USER_NOT_EXIST:"User does not exist",
        bad_token:"Login session expired. Please login again.",
        SHOP_NOT_FOUND:"Shop not found",
        INVALID_CATEGORIES:"Invalid categories",
        INVALID_ITEM:"Invalid item",
        DRIVER_BLOCKED:'Sorry, your account has been suspended by admin',
        DESIGNATION_ADDED:"Designation added",
        INVALID_PERMISSION:"Invalid Permission",
        INVALID_VERIFICATION:"Invalid verification code",
        NOT_HAVE_PERMISSION:"Not have permission",
        STAFF_ADDED:"Staff added",
        USER_ALLREADY_EXIST:"User already exist",
        AVAILABILITY_MARKED:"Availability marked",
        SHOP_CREATED:"Shop created",
        ADD_ITEM:"Add item",
        INVALID_POLYGON:"Invalid polygon",
        NO_DELIVERY_IN_THIS_REGION:'No delivery in this region',
        NO_VALID_REGION:"No valid region",
        EMAIL_EXIST:"Provided email is already registered with us",
        NOT_VERIFIED:"Not verified",
        INVALID_MESSAGE:"Invalid message",
        NOT_IN_SAME_REGION:"Our services are not available in this region",
        NOT_OPEN:"Not open",
        PASSWORD: 'Invalid password',
        INVALID_EMAIL: 'Invalid email',
        INVALID_HEADERS:'Invalid headers',
        INVALID_STATUS:'Invalid status',
        INVALID_PAYLOAD:'Invalid request',
        NOT_PERMITED:'Not permitted',
        ITEM_NAME:'Invalid item name',
        INVALID_ADDONS:'Invalid addons',
        REGION_EXIST:'Region exists',
        USER_DELETED:'User deleted',
        NOT_A_SCHEDULE_ORDER:'Not a schedule order',
        ITEM_NOT_AVAILABLE:'Item not available',
        NOT_READY:'Not ready',
        NOT_ALLOW_TO_GO_OFFLINE:'Not allow to go offline',
        NOT_ALLOW_TO_LOGOUT:'Not allow to logout',
        NOT_A_VALID_ORDER:'Not a valid order',
        MINIMUM_ORDER:'Minimum order',
        ORDER_CANCELED:'This order has been cancelled by user.',
        INVALID_RULE:'Invalid rule',
        NOT_VERIFIED:'Not verified',
        PROMO_CODE_EXIST:'Promo code exist',
        BLOCK_BY_ADMIN:'You have been Block By Admin',
        NO_RESTAURANT_SELECTED:'No Restaurant Selected',
        NO_USER_FOUND:'No user found',
        CAN_NOT_ORDER:'Cannot order at this time',
        INVALID_COUPON:'Invalid coupon',
        INVALID_IMAGE_TYPE:'Invalid image type',
        DRIVER_ALREADY_ASSIGN:'Rider already assign',
        INVALID_DRIVER:'Invalid rider',
        NO_DRIVER:'No rider for current order',
        INVALID_TRIP:'Invalid order',
        INVALID_ORDER:'Invalid order',
        DRIVER_HELP: 'A help request from Rider {} ',
        OUT_OF_STOCK_MESSAGE:'{} has marked order as out of stock',
        EMAIL_SEND_SUCCESSFULLY:'Email has been sent successfully',
        INVALID_CSV:'Invalid CSV',
        PHONE_NUMBER_EXIST: 'Phone number exist',
        EMAIL_EXIST: 'Email already exists',
        INVALID_PASSWORD:'Current password is wrong',
        INVALID_RECOMMENDED_ITEM:'Invalid recommended item',
        COUPON_ABOVE:'This promo is aplicable above {}',
        DRIVER_IS_ON_OTHER_TRIP:'Driver already have a pickup',
        INVALID_STATUS:'Invalid status',
        ORDER_IS_CANCEL:'Order has been canceled',
        ORDER_ALLREADY_ACCEPTED:'Order already accepted',
        ORDER_NOT_PLACED:'ORDER_NOT_PLACED',
        INVALID_REFERRAL:'Invalid referral code',
        INVALID_QUANTITY: 'Invalid Quantity',
        NO_CATEGORY:'No Category Found',
       },
    DEVICE_TYPE:{
        "WEB":"WEB",
        "ANDROID":"ANDROID",
        "IOS":"IOS"
    },
    LIMIT: 10,
    IMAGE_TYPE: {
        SHOP_LOGO: 'SHOP_LOGO',
        ITEM_IMAGE: 'ITEM_IMAGE',
        DELIVERY_AGENT: 'DELIVERY_AGENT',
        PROFILE_IMAGE: 'PROFILE_IMAGE'
    },
    SOCIAL_LOGIN:{
        facebook: 'facebook',
        google: 'google',
    },
    ADDRESS_TYPE_REV:{
        0:"HOME",
        1:"WORK",
        2:"OTHER"
        },
    ADDRESS_TYPE:{
        HOME:0,
        WORK:1,
        OTHER:2
    },
    DISTANCE_UNIT:{
        'KM':0,
        'MILES':1
      },
    KIPLEPAY_CONSTANT:{
        merchantId:"80000155",
        returnUrl:`${process.env.HOST}:${process.env.PORT}/common/kiplePayment`,
        paymentSuccessUrl: `${process.env.frontEndUrl}/paymentsuccess/`,
        paymentFailedUrl:`${process.env.frontEndUrl}/paymentfailure/`,
        merchantSecret:123456,
        requestUrl: `https://uat.kiplepay.com/wcgatewayinit.php`,
        version: '2.0'
    },
    IMAGE_PATH:`http://13.56.99.70:${process.env.PORT}/getImages`,
    JWT_SECRET: 'c781c2af15e1rwewqqwerfwqef8833f8206500e321dccdfe4b32e4ab73e7f07807b9',
};